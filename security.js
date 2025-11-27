/**
 * Phoenix Agency Security Module
 * Protection contre: XSS, injection, copie, impression, DevTools
 * Tracking visiteurs et analytics
 */

(function() {
    'use strict';

    // ========================================
    // 1. PROTECTION CONTRE COPIE/COLLER
    // ========================================
    document.addEventListener('copy', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('cut', function(e) {
        e.preventDefault();
        return false;
    });

    document.addEventListener('paste', function(e) {
        e.preventDefault();
        return false;
    });

    // Desactiver selection de texte
    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            return false;
        }
    });

    // ========================================
    // 2. PROTECTION CLIC DROIT
    // ========================================
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // ========================================
    // 3. PROTECTION RACCOURCIS CLAVIER
    // ========================================
    document.addEventListener('keydown', function(e) {
        // Bloquer F12 (DevTools)
        if (e.key === 'F12') {
            e.preventDefault();
            return false;
        }
        // Bloquer Ctrl+Shift+I (DevTools)
        if (e.ctrlKey && e.shiftKey && e.key === 'I') {
            e.preventDefault();
            return false;
        }
        // Bloquer Ctrl+Shift+J (Console)
        if (e.ctrlKey && e.shiftKey && e.key === 'J') {
            e.preventDefault();
            return false;
        }
        // Bloquer Ctrl+U (View Source)
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            return false;
        }
        // Bloquer Ctrl+S (Save)
        if (e.ctrlKey && e.key === 's') {
            e.preventDefault();
            return false;
        }
        // Bloquer Ctrl+P (Print)
        if (e.ctrlKey && e.key === 'p') {
            e.preventDefault();
            return false;
        }
        // Bloquer Ctrl+C (Copy) sauf dans inputs
        if (e.ctrlKey && e.key === 'c') {
            if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                return false;
            }
        }
    });

    // ========================================
    // 4. PROTECTION IMPRESSION
    // ========================================
    window.addEventListener('beforeprint', function() {
        document.body.style.display = 'none';
    });

    window.addEventListener('afterprint', function() {
        document.body.style.display = '';
    });

    // CSS pour bloquer impression
    var printStyle = document.createElement('style');
    printStyle.textContent = '@media print { body { display: none !important; } }';
    document.head.appendChild(printStyle);

    // ========================================
    // 5. DETECTION DEVTOOLS
    // ========================================
    var devToolsOpen = false;
    var threshold = 160;

    setInterval(function() {
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            if (!devToolsOpen) {
                devToolsOpen = true;
                console.clear();
            }
        } else {
            devToolsOpen = false;
        }
    }, 1000);

    // ========================================
    // 6. PROTECTION XSS - SANITIZATION
    // ========================================
    window.sanitizeHTML = function(str) {
        var temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    };

    // ========================================
    // 7. PROTECTION DRAG & DROP
    // ========================================
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // ========================================
    // 8. VISITOR TRACKING (Analytics simple)
    // ========================================
    function trackVisitor() {
        var visitorData = {
            timestamp: new Date().toISOString(),
            referrer: document.referrer || 'direct',
            userAgent: navigator.userAgent,
            language: navigator.language,
            screenSize: screen.width + 'x' + screen.height,
            viewport: window.innerWidth + 'x' + window.innerHeight,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            page: window.location.pathname
        };

        // Stocker localement pour analyse
        var visits = JSON.parse(localStorage.getItem('phoenix_visits') || '[]');
        visits.push(visitorData);
        if (visits.length > 100) visits.shift();
        localStorage.setItem('phoenix_visits', JSON.stringify(visits));

        // Log pour debug (sera invisible en prod)
        console.log('%cPhoenix Agency - Protected', 'color: #FF5733; font-weight: bold;');
    }

    // ========================================
    // 9. PROTECTION IFRAME
    // ========================================
    if (window.top !== window.self) {
        window.top.location = window.self.location;
    }

    // ========================================
    // 10. CONSOLE WARNING
    // ========================================
    console.log('%c⚠️ ATTENTION', 'color: red; font-size: 30px; font-weight: bold;');
    console.log('%cCet espace est reserve aux developpeurs.', 'color: #333; font-size: 14px;');
    console.log('%cSi quelquun vous a demande de coller quelque chose ici, vous etes victime dune arnaque.', 'color: #333; font-size: 14px;');

    // Initialiser tracking au chargement
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', trackVisitor);
    } else {
        trackVisitor();
    }

})();
