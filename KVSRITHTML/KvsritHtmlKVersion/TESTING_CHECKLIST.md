# Responsive Navbar Testing Checklist & Documentation

This document outlines the testing criteria and usage instructions for the enhanced academic navbar.

## 1. Feature Overview

The enhanced navbar implements a professional, academic design with the following key features:
- **Top Contact Bar:** High-contrast, accessible contact information with refined typography.
- **Main Navigation:** Consistent spacing, hover reveal effects, and sticky positioning.
- **Micro-interactions:** Smooth transitions, staggered mobile menu animations, and interactive hover states.
- **Mega Menus:** Structured deep-navigation for departments.
- **Responsiveness:** Optimized layouts for Mobile, Tablet, and Desktop.

## 2. Browser Support
Ensure the navbar renders correctly in the following browsers (latest 2 versions):
- [ ] Google Chrome
- [ ] Mozilla Firefox
- [ ] Microsoft Edge
- [ ] Safari (macOS & iOS)

## 3. Responsive Breakpoints Testing
Validate layout stability and functionality at these key widths:

### Mobile (320px - 767px)
- [ ] **Top Bar:** Should be hidden (as per design) or stacked if modified.
- [ ] **Hamburger Menu:** Touch target size ≥ 44x44px.
- [ ] **Mobile Menu:**
    - [ ] Opens with smooth slide-down animation.
    - [ ] Links appear with staggered fade-in effect.
    - [ ] "Apply Now" button is prominent and clickable.
    - [ ] No horizontal scrolling triggers.
    - [ ] Dropdowns inside mobile menu (if applicable) function correctly.

### Tablet (768px - 1023px)
- [ ] **Layout:** Logo and Menu items adjust spacing without overlapping.
- [ ] **Touch Targets:** Menu items have sufficient padding (≥8px vertical).
- [ ] **Dropdowns:** Open reliably on tap (if touch device) or hover (if mouse connected).

### Desktop (1024px - 1439px)
- [ ] **Spacing:** Menu items have ~24-32px gaps.
- [ ] **Hover Effects:**
    - [ ] Bottom border reveal (2-3px) is smooth.
    - [ ] Dropdowns fade in and slide down (4-6px).
- [ ] **Mega Menu:** "Departments" dropdown aligns correctly and grid is 2-column.

### Large Desktop (1440px+)
- [ ] **Centering:** Content strictly constrained to `max-w-7xl` (approx 1280px).
- [ ] **Visuals:** Backgrounds extend full width, content remains centered.

## 4. Interaction & Accessibility Checklist
- [ ] **Keyboard Navigation:**
    - [ ] `Tab` key moves focus through all top bar links.
    - [ ] `Tab` key moves focus through main menu items.
    - [ ] `Enter` / `Space` opens dropdowns.
    - [ ] `Esc` key closes open dropdowns or search overlay.
- [ ] **Color Contrast:**
    - [ ] Top bar text vs background passes WCAG AA (aim for 4.5:1).
    - [ ] Main nav text vs white background passes WCAG AA.
- [ ] **Hover Stability:** No layout shifts (jitter) when hovering over menu items.
- [ ] **Scroll Behavior:**
    - [ ] Navbar becomes "scrolled" (shdow appears) after ~20px scroll.
    - [ ] Sticky positioning holds correct top alignment.

## 5. Technical Implementation Details
- **CSS File:** `css/navbar-enhanced.css` uses CSS variables for easy theming (e.g., `--color-accent` for the blue highlight).
- **JavaScript:** `assets/js/components.js` handles the injection, scroll detection (`.scrolled` class), and staggered animations.
- **Customization:**
    - To change the primary blue color, edit `--color-secondary` and `--color-accent` in the CSS `:root`.
    - To adjust animation speeds, modify `--transition-fast` or `--transition-medium`.

## 6. Performance
- [ ] **FPS:** Animations (dropdowns, mobile menu) run at ~60fps on average devices.
- [ ] **CLS:** No Cumulative Layout Shift during page load (navbar reserved space).
