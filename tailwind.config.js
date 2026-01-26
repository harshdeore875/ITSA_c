/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ITSA Brand Colors - Matching Logo & College Palette
        primary: '#7C3AED',           // Royal Purple
        secondary: '#F5B301',         // Tech Gold (from logo)
        accent: '#9333EA',            // Electric Violet
        dark: '#0F0F14',              // Charcoal Black
        textPrimary: '#1F2937',       // Dark text
        textSecondary: '#6B7280',     // Medium gray
        borderNeutral: '#E5E7EB',     // Light border
        
        // Page-Level Elements
        'bg-primary': '#FFFFFF',      // White background (clean)
        'bg-section': '#F8FAFC',      // Light gray section
        'bg-card': '#FFFFFF',         // White cards
        'divider': '#E5E7EB',
        
        // Typography
        'text-primary': '#1F2937',
        'text-body': '#6B7280',
        'text-muted': '#9CA3AF',
        'text-disabled': '#D1D5DB',
        'text-link': '#7C3AED',
        'text-link-hover': '#6D28D9',
        
        // Buttons - Primary
        'btn-primary-bg': '#7C3AED',
        'btn-primary-text': '#FFFFFF',
        'btn-primary-hover': '#6D28D9',
        'btn-primary-active': '#5B21B6',
        
        // Buttons - Secondary
        'btn-secondary-bg': '#F5B301',
        'btn-secondary-text': '#000000',
        'btn-secondary-hover': '#D49706',
        'btn-secondary-border': '#F5B301',
        
        // Form Elements
        'form-bg': '#FFFFFF',
        'form-border': '#E5E7EB',
        'form-focus-border': '#7C3AED',
        'form-placeholder': '#9CA3AF',
        'form-text': '#1F2937',
        
        // Validation
        'validation-error-border': '#DC2626',
        'validation-error-text': '#DC2626',
        'validation-success-border': '#16A34A',
        
        // Navigation
        'nav-bg': '#FFFFFF',
        'nav-border': '#E5E7EB',
        'nav-logo': '#7C3AED',
        'nav-text': '#1F2937',
        'nav-active': '#F5B301',
        'nav-active-bg': '#FEF3C7',
        
        // Cards & Containers
        'card-bg': '#FFFFFF',
        'card-border': '#E5E7EB',
        'card-title': '#1F2937',
        'card-text': '#6B7280',
        'card-shadow': 'rgba(124, 58, 237, 0.1)',
        
        // Hero Background
        'hero-bg': '#0F0F14',
        'hero-text': '#FFFFFF',
        
        // Legacy colors (backward compatibility)
        'navy': '#7C3AED',
        'slate': '#F8FAFC',
        'indigo-accent': '#7C3AED',
        'violet-accent': '#9333EA',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F0F14 0%, #2D1B4E 45%, #7C3AED 100%)',
        'btn-gradient': 'linear-gradient(135deg, #7C3AED, #9333EA)',
        'btn-gradient-hover': 'linear-gradient(135deg, #9333EA, #7C3AED)',
        'accent-gradient': 'linear-gradient(135deg, #7C3AED, #F5B301)',
      },
      boxShadow: {
        'btn-glow': '0 8px 24px rgba(124, 58, 237, 0.4)',
        'card-hover': '0 12px 32px rgba(124, 58, 237, 0.18)',
        'primary': '0 4px 16px rgba(124, 58, 237, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        // Instant feedback (80-100ms)
        'feedback-instant': 'feedbackInstant 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Hover / Focus (120-180ms)
        'hover-scale': 'hoverScale 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        'focus-ring': 'focusRing 0.12s cubic-bezier(0.4, 0, 0.2, 1)',
        'link-hover': 'linkHover 0.12s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Click / Tap (100-150ms)
        'active-press': 'activePress 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Component enter (200-250ms)
        'component-enter': 'componentEnter 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        'card-hover': 'cardHover 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'card-press': 'cardPress 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
        'icon-hover': 'iconHover 0.12s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Page transition (250-300ms)
        'page-enter': 'pageEnter 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        'page-exit': 'pageExit 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Form interactions
        'input-focus': 'inputFocus 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        'error-message': 'errorMessage 0.18s cubic-bezier(0.4, 0, 0.2, 1)',
        'success-check': 'successCheck 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Navigation
        'nav-item-hover': 'navItemHover 0.12s cubic-bezier(0.4, 0, 0.2, 1)',
        'nav-indicator': 'navIndicator 0.18s cubic-bezier(0.4, 0, 0.2, 1)',
        'dropdown-enter': 'dropdownEnter 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'dropdown-exit': 'dropdownExit 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Modal & Drawer
        'modal-backdrop': 'modalBackdrop 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'modal-enter': 'modalEnter 0.22s cubic-bezier(0.4, 0, 0.2, 1)',
        'drawer-enter': 'drawerEnter 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Toasts & Notifications
        'toast-enter': 'toastEnter 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        'toast-exit': 'toastExit 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Skeleton & Loading
        'skeleton-shimmer': 'skeletonShimmer 1.2s ease-in-out infinite',
        'toggle-switch': 'toggleSwitch 0.15s cubic-bezier(0.4, 0, 0.2, 1)',
        
        // Legacy animations (kept for compatibility)
        'fade-up': 'fadeUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        // Button animations
        hoverScale: {
          '0%': { transform: 'scale(1)', backgroundColor: '#7C3AED' },
          '100%': { transform: 'scale(1.03)', backgroundColor: '#6D28D9' },
        },
        activePress: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.97)' },
        },
        focusRing: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        
        // Link animations
        linkHover: {
          '0%': { color: '#7C3AED', textDecoration: 'none' },
          '100%': { color: '#6D28D9', textDecoration: 'underline' },
        },
        
        // Card animations
        cardHover: {
          '0%': { transform: 'translateY(0)', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)' },
          '100%': { transform: 'translateY(-4px)', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' },
        },
        cardPress: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(2px)' },
        },
        
        // Icon animations
        iconHover: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '100%': { transform: 'scale(1.05) rotate(6deg)' },
        },
        
        // Form animations
        inputFocus: {
          '0%': { borderColor: '#E5E7EB' },
          '100%': { borderColor: '#A78BFA' },
        },
        errorMessage: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        successCheck: {
          '0%': { borderColor: '#E5E7EB' },
          '100%': { borderColor: '#16A34A' },
        },
        
        // Navigation animations
        navItemHover: {
          '0%': { backgroundColor: 'transparent' },
          '100%': { backgroundColor: '#F5F3FF' },
        },
        navIndicator: {
          '0%': { transform: 'translateX(-6px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        dropdownEnter: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        dropdownExit: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.95)' },
        },
        
        // Modal & Drawer animations
        modalBackdrop: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.5' },
        },
        modalEnter: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        drawerEnter: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        
        // Toast animations
        toastEnter: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        toastExit: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        
        // Page transitions
        pageEnter: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pageExit: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        
        // Loading animations
        skeletonShimmer: {
          '0%': { opacity: '0.5' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.5' },
        },
        toggleSwitch: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        
        // Utility animations
        feedbackInstant: {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
        
        // Legacy animations (kept for compatibility)
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(99, 102, 241, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(99, 102, 241, 0)' },
        },
      },
      transitionDuration: {
        '80': '80ms',
        '100': '100ms',
        '120': '120ms',
        '150': '150ms',
        '180': '180ms',
        '200': '200ms',
        '220': '220ms',
        '250': '250ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-standard': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-standard': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out-standard': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
