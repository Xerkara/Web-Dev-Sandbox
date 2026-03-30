# Accessible Modal Component - Developer Quick Start Guide

## Overview

This is a **production-ready, accessibility-first modal dialog component** that fully complies with WCAG 2.1 Level AA standards. It includes keyboard navigation, focus management, ARIA attributes, form validation, and comprehensive error handling.

### Key Features
✅ Focus trapping (keyboard stays within modal)
✅ ESC key to close
✅ Click outside to close
✅ ARIA attributes for screen readers
✅ Visible focus indicators (3px high-contrast)
✅ Form with validation & error handling
✅ Character counter
✅ Touch-friendly (44x44px targets)
✅ Fully keyboard navigable
✅ Live region announcements
✅ Responsive design
✅ No dependencies (vanilla JavaScript)

---

## Files Included

```
accessible-modal-component.html    - Complete standalone component
ACCESSIBLE-MODAL-WCAG-GUIDE.md     - Complete WCAG 2.1 AA documentation
ACCESSIBILITY-TESTING-CHECKLIST.md - Testing & validation guide
README-QUICK-START.md              - This file
```

---

## Usage

### 1. Simple Setup (Copy & Paste)

**Option A: Use as Standalone HTML**
```bash
1. Download accessible-modal-component.html
2. Open in browser"
3. Click "Open Modal" buttons to see it in action
```

**Option B: Extract Component for Your Project**
```html
<!-- 1. Copy the CSS from <style> section into your stylesheet -->
<link rel="stylesheet" href="your-styles.css">

<!-- 2. Copy the HTML modal markup into your page -->
<div class="modal-overlay" id="formModalOverlay">
    <div class="modal" id="formModal" role="dialog" aria-modal="true" aria-labelledby="formModalTitle">
        <!-- Modal content here -->
    </div>
</div>

<!-- 3. Copy the JavaScript from <script> section into your JS file -->
<script src="accessible-modal.js"></script>
```

### 2. Initialize Modal

**Minimal Setup (General Modal):**
```javascript
// HTML trigger button
<button id="openModalBtn">Open Modal</button>

// JavaScript initialization
const modal = new AccessibleModal(
    document.getElementById('openModalBtn'),           // Trigger element
    document.getElementById('generalModalOverlay'),    // Overlay
    document.getElementById('generalModal'),           // Modal dialog
    document.querySelectorAll('#generalModal [data-dismiss="modal"]')  // Close buttons
);
```

**With Form Validation:**
```javascript
// Initialize modal
const formModal = new AccessibleModal(
    document.getElementById('openFormModalBtn'),
    document.getElementById('formModalOverlay'),
    document.getElementById('formModal'),
    document.querySelectorAll('#formModal [data-dismiss="modal"]')
);

// Initialize form validator
const validator = new FormValidator(
    document.getElementById('contactForm'),
    document.getElementById('formModal'),
    document.getElementById('formStatus'),
    document.getElementById('submitFormBtn')
);
```

### 3. Customize for Your Needs

**Change Modal Size:**
```css
.modal {
    max-width: 600px;  /* Adjust this value */
    width: 90%;
}
```

**Change Form Fields:**
Edit the HTML form structure in the modal-content div. Keep these attributes:
- `aria-required="true"` on required fields
- `aria-describedby="fieldNameError"` linking to error message
- `id` on each field for label association
- `<label for="fieldId">` with proper association

**Change Colors:**
```css
/* Primary brand color */
:root {
    --primary-color: #667eea;
    --error-color: #d32f2f;
    --success-color: #2e7d32;
}
```

**Change Validation Rules:**
```javascript
// In FormValidator class, modify validateField() method
if (field.type === 'text' && field.id === 'nameField') {
    if (!field.value.trim()) {
        error = 'Full name is required';
    } else if (field.value.length < 5) {  // Change minimum length
        error = 'Name must be at least 5 characters';
    }
}
```

---

## Integration Examples

### React Component

```jsx
import React, { useEffect } from 'react';
import AccessibleModal from './accessible-modal';

function Modal() {
    useEffect(() => {
        const modal = new AccessibleModal(
            document.getElementById('openBtn'),
            document.getElementById('overlay'),
            document.getElementById('modal'),
            document.querySelectorAll('[data-dismiss="modal"]')
        );
    }, []);

    return (
        <>
            <button id="openBtn">Open Modal</button>
            
            <div id="overlay" className="modal-overlay">
                <div id="modal" className="modal" role="dialog">
                    {/* Modal content */}
                </div>
            </div>
        </>
    );
}

export default Modal;
```

### Vue.js Component

```vue
<template>
    <div>
        <button @click="openModal">Open Modal</button>
        
        <div ref="overlay" class="modal-overlay">
            <div ref="modal" class="modal" role="dialog">
                <!-- Modal content -->
            </div>
        </div>
    </div>
</template>

<script>
import AccessibleModal from './accessible-modal'

export default {
    mounted() {
        this.modal = new AccessibleModal(
            this.$el.querySelector('button'),
            this.$refs.overlay,
            this.$refs.modal,
            this.$refs.modal.querySelectorAll('[data-dismiss="modal"]')
        )
    },
    methods: {
        openModal() {
            this.modal.open()
        }
    }
}
</script>
```

### Next.js Component

```jsx
'use client'

import { useEffect, useRef } from 'react'
import AccessibleModal from './accessible-modal'

export default function Modal() {
    const overlayRef = useRef(null)
    const modalRef = useRef(null)

    useEffect(() => {
        if (!overlayRef.current || !modalRef.current) return

        const modal = new AccessibleModal(
            document.getElementById('openBtn'),
            overlayRef.current,
            modalRef.current,
            modalRef.current.querySelectorAll('[data-dismiss="modal"]')
        )
    }, [])

    return (
        <>
            <button id="openBtn">Open Modal</button>
            <div ref={overlayRef} className="modal-overlay">
                <div ref={modalRef} className="modal" role="dialog">
                    {/* Modal content */}
                </div>
            </div>
        </>
    )
}
```

---

## API Reference

### AccessibleModal Class

```javascript
new AccessibleModal(triggers, overlay, modal, dismissButtons)
```

**Parameters:**
- `triggers` (Element | Element[]): Button(s) that open the modal
- `overlay` (Element): The overlay/backdrop element
- `modal` (Element): The modal dialog container
- `dismissButtons` (Element | NodeList): Close button(s)

**Methods:**
```javascript
modal.open()              // Open the modal
modal.close()             // Close the modal
modal.isOpen              // Boolean: is modal currently open
```

**Events:**
- Modal automatically handles keyboard (Tab, Escape) and click events
- Focus automatically trapped within modal when open
- Focus restored when modal closes

### FormValidator Class

```javascript
new FormValidator(form, modal, statusElement, submitButton)
```

**Parameters:**
- `form` (HTMLFormElement): The form to validate
- `modal` (Element): The modal container
- `statusElement` (Element): Element for status messages
- `submitButton` (Element): Submit button element

**Methods:**
```javascript
validator.validateField(field)    // Validate single field
validator.handleSubmit(e)         // Handle form submission
validator.showStatus(msg, type)   // Show status message
```

**Field Validation Rules:**
- Email: Valid email format required
- Name: Minimum 2 characters
- Message: 10-500 characters, character counter displayed
- Terms: Checkbox must be checked

---

## Styling Options

### CSS Variables (for easy customization)

```css
:root {
    --primary-color: #667eea;
    --primary-hover: #5568d3;
    --error-color: #d32f2f;
    --error-bg: #ffebee;
    --success-color: #2e7d32;
    --success-bg: #e8f5e9;
    --border-color: #ddd;
    --focus-color: #667eea;
    --text-dark: #333;
    --text-light: #666;
    --border-radius: 6px;
}
```

### Dark Mode Support

```css
@media (prefers-color-scheme: dark) {
    body {
        background: #1a1a1a;
        color: #e0e0e0;
    }
    
    .modal {
        background: #2a2a2a;
        color: #e0e0e0;
    }
    
    /* Adjust colors for dark mode */
}
```

### High Contrast Mode

```css
@media (prefers-contrast: more) {
    .btn:focus-visible {
        outline-width: 4px;
    }
    
    .error-message {
        font-weight: bold;
    }
}
```

---

## Accessibility Customization

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
    .modal {
        animation: none;
    }
    
    .modal-overlay {
        transition: none;
    }
}
```

### Large Text Support

```css
@media (min-width: 1px) {
    /* iOS uses minimum font size, no need to adjust */
}

@supports (font-size-adjust: 0.5) {
    body {
        font-size-adjust: 0.5;  /* Adjust to readable size */
    }
}
```

### High Contrast Detection

```javascript
// Detect if user prefers high contrast
const prefersHighContrast = window.matchMedia(
    '(prefers-contrast: more)'
).matches;

if (prefersHighContrast) {
    document.body.classList.add('high-contrast-mode');
}
```

---

## Common Use Cases

### 1. Alert Modal (Confirmation)

```html
<div class="modal" role="alertdialog" aria-labelledby="alertTitle">
    <h2 id="alertTitle">Confirm Action</h2>
    <p>Are you sure you want to delete this item?</p>
    <button class="btn btn-secondary" data-dismiss="modal">Cancel</button>
    <button class="btn" id="confirmBtn">Delete</button>
</div>
```

### 2. Help/Information Modal

```html
<div class="modal" role="dialog" aria-labelledby="helpTitle">
    <h2 id="helpTitle">Help & Information</h2>
    <div class="modal-content">
        <h3>How to use this feature</h3>
        <ol>
            <li>Step one</li>
            <li>Step two</li>
            <li>Step three</li>
        </ol>
    </div>
    <button class="btn" data-dismiss="modal">Got it!</button>
</div>
```

### 3. Multi-Step Form Modal

```html
<div class="modal" role="dialog" aria-labelledby="formTitle">
    <h2 id="formTitle">Complete Your Profile</h2>
    
    <!-- Step 1 -->
    <fieldset id="step1" aria-labelledby="step1Label">
        <legend id="step1Label">Personal Information (Step 1 of 3)</legend>
        <!-- Form fields -->
    </fieldset>
    
    <!-- Step 2, 3, etc. -->
</div>
```

### 4. Loading/Processing Modal

```html
<div class="modal" role="dialog" aria-label="Loading">
    <div style="text-align: center; padding: 40px;">
        <div style="font-size: 48px; margin-bottom: 20px;">⏳</div>
        <p>Processing your request...</p>
        <p aria-live="polite" aria-atomic="true" id="progress">
            Step 1 of 3
        </p>
    </div>
</div>
```

---

## Testing

### Quick Test Commands

```bash
# Check with automated tool
# Open in browser and run in DevTools console:
new axe.AxeCore().run((error, results) => {
    console.log('Violations:', results.violations);
});

# Test keyboard navigation
# Press Tab multiple times, verify focus trap
# Press Escape, verify modal closes
# Shift+Tab to go backward
```

### Screen Reader Testing

**NVDA (Windows):**
```bash
# Download from nvaccess.org
# Run NVDA
# Tab through modal, listen for:
# - "Dialog" announcement
# - Form labels
# - Error messages
# - Status updates
```

**VoiceOver (Mac):**
```bash
# Cmd+Fn+F5 to enable
# VO+Right arrow to navigate
# VO+Space to activate
```

### Automated Testing

```bash
# Using axe
npm install --save-dev @axe-core/react

# Using Lighthouse
# Chrome DevTools > Lighthouse > Accessibility
```

---

## Troubleshooting

### Issue: Focus not visible
**Solution:**
```css
/* Ensure focus styles aren't overridden */
input:focus {
    outline: 3px solid #667eea;
    outline-offset: 2px;
}

/* Don't remove outline without replacement */
input:focus {
    outline: none; /* ❌ NEVER do this alone */
}
```

### Issue: Modal doesn't close with Escape
**Solution:**
```javascript
// Ensure keydown handler is attached
overlay.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        e.preventDefault();
        modal.close();
    }
});
```

### Issue: Form validation not working
**Solution:**
```javascript
// Ensure form has novalidate attribute
// <form novalidate>

// Check validator is initialized
const validator = new FormValidator(
    document.getElementById('contactForm'),
    document.getElementById('formModal'),
    document.getElementById('formStatus'),
    document.getElementById('submitFormBtn')
);
```

### Issue: Screen reader doesn't announce errors
**Solution:**
```html
<!-- Ensure aria-describedby and role="alert" -->
<input 
    id="emailField"
    aria-describedby="emailError"
/>
<div id="emailError" role="alert">
    Error message here
</div>
```

### Issue: Buttons too small to tap on mobile
**Solution:**
```css
/* Minimum 44x44px touch targets */
.btn {
    min-height: 44px;
    padding: 12px 24px;  /* At least 44px tall */
}

.modal-close {
    width: 44px;
    height: 44px;
}
```

---

## Performance Tips

1. **Lazy Load Modal JavaScript**
   ```javascript
   // Only initialize when modal is likely to be used
   button.addEventListener('click', () => {
       if (!modal) {
           modal = new AccessibleModal(...)
       }
       modal.open()
   })
   ```

2. **Debounce Validation**
   ```javascript
   const debounce = (func, wait) => {
       let timeout;
       return (...args) => {
           clearTimeout(timeout);
           timeout = setTimeout(() => func(...args), wait);
       };
   };
   ```

3. **Minimize Reflows**
   ```javascript
   // Batch DOM changes
   field.classList.add('error');
   errorElement.textContent = error;
   errorElement.style.display = 'flex';  // Single reflow
   ```

---

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| IE 11 | - | ⚠️ Partial (no :focus-visible) |
| Mobile Safari | iOS 12+ | ✅ Full |
| Chrome Android | Latest | ✅ Full |

---

## CSS Classes Reference

```css
.modal-overlay    /* Main overlay container */
.modal-overlay.active   /* Active state */
.modal            /* Modal dialog box */
.modal-header     /* Header with title and close */
.modal-title      /* Modal title */
.modal-close      /* Close button */
.modal-content    /* Main content area */
.modal-footer     /* Footer with action buttons */
.btn              /* Primary button */
.btn:focus-visible    /* Focus state */
.btn:hover        /* Hover state */
.form-group       /* Form field wrapper */
.form-status      /* Form status message */
.form-status.error    /* Error status */
.form-status.success  /* Success status */
.error-message    /* Error message display */
.sr-only          /* Screen reader only text */
```

---

## WCAG 2.1 AA Compliance

This component meets the following WCAG 2.1 Level AA success criteria:

- ✅ 1.3.1 Info and Relationships
- ✅ 1.4.3 Contrast (Minimum)
- ✅ 1.4.11 Non-text Contrast
- ✅ 2.1.1 Keyboard
- ✅ 2.1.2 No Keyboard Trap
- ✅ 2.4.3 Focus Order
- ✅ 2.4.7 Focus Visible
- ✅ 2.5.5 Target Size (Label)
- ✅ 3.3.1 Error Identification
- ✅ 3.3.3 Error Suggestion
- ✅ 3.3.4 Error Prevention
- ✅ 4.1.2 Name, Role, Value
- ✅ 4.1.3 Status Messages

See [ACCESSIBLE-MODAL-WCAG-GUIDE.md](./ACCESSIBLE-MODAL-WCAG-GUIDE.md) for full details.

---

## Support & Resources

- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **ARIA Practices:** https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
- **MDN Dialog Element:** https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
- **WebAIM:** https://webaim.org/

---

## License

This component is provided as an educational resource. Free to use, modify, and distribute.

---

## Changelog

### Version 1.0 (March 2026)
- Initial release
- Complete focus management
- Full form validation
- WCAG 2.1 AA compliant
- Comprehensive documentation

---

## Getting Help

1. **Check the testing checklist:** [ACCESSIBILITY-TESTING-CHECKLIST.md](./ACCESSIBILITY-TESTING-CHECKLIST.md)
2. **Review WCAG guide:** [ACCESSIBLE-MODAL-WCAG-GUIDE.md](./ACCESSIBLE-MODAL-WCAG-GUIDE.md)
3. **Run automated testing:** Use axe DevTools or WAVE
4. **Test with screen readers:** NVDA, JAWS, or VoiceOver

**Questions?** Refer to the documentation files or check out the WCAG guidelines at https://www.w3.org/WAI/WCAG21/quickref/

---

**Last Updated:** March 2026  
**Version:** 1.0  
**Compliance Level:** WCAG 2.1 AA  
**Framework:** Vanilla JavaScript (No dependencies)
