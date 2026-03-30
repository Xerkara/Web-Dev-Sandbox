# Accessibility Testing Checklist for Modal Component

## Quick Reference Testing Guide

Use this checklist to verify your modal component implementation meets WCAG 2.1 AA standards.

---

## 1. Keyboard Navigation Testing

### Test Procedure
Open the modal and perform these keyboard interactions:

- [ ] **Tab Key**
  - Press Tab to move focus forward through all interactive elements
  - Verify focus indicator appears on each element
  - Elements highlight in logical order (top-to-bottom, left-to-right)

- [ ] **Shift+Tab Key**
  - Press Shift+Tab to move focus backward
  - Focus moves in reverse order
  - Properly cycles through form fields

- [ ] **Focus Trapping**
  - Start at first element, Tab to last element, Tab again
  - Focus should wrap to first element (not escape to background)
  - Similarly at first element, Shift+Tab should go to last element
  - Press Tab on close button → goes to next element (not background)

- [ ] **Escape Key**
  - Press Escape while modal is open
  - Modal closes immediately
  - Focus returns to button that opened the modal

- [ ] **Enter/Space on Buttons**
  - Tab to any button
  - Press Enter or Space
  - Button action executes (submit, close, etc.)

**Expected Result:** ✅ All keyboard interactions work without mouse needed

---

## 2. Focus Indicator Testing

### Visual Inspection

- [ ] **Focus Indicator Appearance**
  - Outline clearly visible around focused element
  - Outline color contrasts with element and background
  - Outline thickness at least 2px
  - Outline has 2px offset from element

- [ ] **Focus Indicators Present On:**
  - [ ] Buttons (Open, Close, Submit, Cancel)
  - [ ] Form input fields (email, name, message, checkbox)
  - [ ] Close button (✕)
  - [ ] All interactive elements

- [ ] **High Contrast Mode (Windows)**
  - Press Windows key + U (Ease of Access)
  - Set color filters to High Contrast
  - Focus indicators remain visible

- [ ] **Zoom Testing**
  - Zoom to 100% - Focus indicator visible
  - Zoom to 200% - Focus indicator still visible and clear
  - No focus indicator disappears or becomes obscured

**Expected Result:** ✅ All interactive elements have clear, high-contrast focus indicators

---

## 3. Color Contrast Testing

### Automated Tools
Use any of these tools (free online):
- axe DevTools (Browser extension)
- WAVE (Wave.webaim.org)
- ColorOracle (High contrast simulator)
- Lighthouse (Chrome DevTools)

### Manual Testing
- [ ] **Text Color Contrast**
  - Body text on white background is readable
  - Headings on white background are readable
  - Error messages in red are readable
  - Success messages in green are readable

- [ ] **UI Element Contrast**
  - Focus indicators (3px outline) contrast with background
  - Button colors distinct from background
  - Borders visible (not same color as background)

- [ ] **Error State Contrast**
  - Error text readable (red on white)
  - Error backgrounds don't cause readability issues
  - Error icons visible (not relying on color alone)

**Expected Result:** ✅ All text meets 4.5:1 contrast for normal text; UI elements meet 3:1 contrast

---

## 4. Screen Reader Testing

### Test with NVDA (Free, Windows)
1. Download and install [NVDA](https://www.nvaccess.org/)
2. Start NVDA (Ctrl+Alt+N)
3. Reload page with NVDA active

### Test with VoiceOver (macOS/iOS - Built-in)
1. Press Cmd+Fn+F5 to enable VoiceOver
2. Navigate with VO+Left/Right arrows

### Test with JAWS (Premium, Windows)
1. Start JAWS
2. Reload page

### What to Listen For

- [ ] **Modal Opens**
  - Dialog announced: "Dialog, Dialog" or similar
  - Title announced: "Contact Form"
  - First interactive element receives focus

- [ ] **Form Fields**
  - Label announced before field: "Email Address"
  - Field type announced: "edit text" or "email"
  - Required status announced: "required" or "starred"

- [ ] **Error Messages**
  - Error detected while filling form
  - Error announced: "Email Address edit text error enter a valid email"
  - Error visible with aria-describedby association

- [ ] **Validation Results**
  - Form submit attempt with errors
  - Errors announced clearly
  - Character counter updates announced
  - Success message announced after valid submission

- [ ] **Modal Close**
  - Focus returns to Open button when modal closes
  - Announcement: "Open Form Modal button"

**Expected Result:** ✅ All information conveyed visually is also conveyed to screen readers

---

## 5. Form Validation Testing

### Email Field Tests
```
Test Input           | Expected Behavior
---------------------|--------------------------------------------------
(empty)             | Error: "Email address is required"
invalid@            | Error: "Please enter a valid email"
test@example.com    | No error, field valid
```

- [ ] Error displays on blur (losing focus)
- [ ] Error displays immediately on submit attempt
- [ ] Error clears when user corrects input
- [ ] Error message associated with field (aria-describedby)

### Name Field Tests
```
Test Input           | Expected Behavior
---------------------|--------------------------------------------------
(empty)             | Error: "Full name is required"
A                   | Error: "Name must be at least 2 characters"
John Doe            | No error, field valid
```

### Message Field Tests
```
Test Input           | Expected Behavior
---------------------|--------------------------------------------------
(empty)             | Error: "Message is required"
short               | Error: "Message must be at least 10 characters"
(500+ chars)        | Error: "Message cannot exceed 500 characters"
(valid 50 chars)    | No error, character counter shows "50/500"
```

- [ ] Character counter updates as user types
- [ ] Counter announces to screen readers via aria-live
- [ ] Message auto-limits at 500 characters

### Terms Checkbox Tests
```
Test Scenario        | Expected Behavior
---------------------|--------------------------------------------------
Unchecked submit    | Error: "You must agree to terms"
Checked submit      | Form validates and submits
```

- [ ] Checkbox label clearly associated
- [ ] Error shown if unchecked at submit

### Form Submission Tests
- [ ] All fields validated on submit attempt
- [ ] First error field focused automatically
- [ ] Success message shown after valid submission
- [ ] Success message announced to screen readers
- [ ] Form resets after successful submission

**Expected Result:** ✅ All validation works, errors clear, success confirms

---

## 6. Click-Outside-to-Close Testing

- [ ] Modal open over dark overlay
- [ ] Click on overlay (not on modal)
- [ ] Modal closes
- [ ] Focus returns to Open button
- [ ] Can interact with page content again

**Expected Result:** ✅ Click outside modal closes it without submitting form

---

## 7. Mobile/Touch Testing

### Touchscreen Device Tests
- [ ] Modal displays properly (not cut off)
- [ ] All buttons are 44x44px minimum
- [ ] Can tap all interactive elements
- [ ] Focus indicators visible on touch
- [ ] Keyboard (if attached) still works

### Orientation Changes
- [ ] Modal repositions when orientation changes
- [ ] Content remains visible after rotation
- [ ] Scroll works if content is too long

**Expected Result:** ✅ Component works on touch devices and tablet displays

---

## 8. Responsive Design Testing

### Different Screen Sizes
- [ ] **Desktop (1440px)** - Modal positioned centrally
- [ ] **Laptop (1024px)** - Modal fits with spacing
- [ ] **Tablet (768px)** - Modal adjusts width appropriately
- [ ] **Mobile (375px)** - Modal takes 90% width, button layout adjusts

- [ ] Buttons stack vertically on small screens
- [ ] Form fields remain full-width and usable
- [ ] Modal content scrolls if needed

**Expected Result:** ✅ Component is fully responsive

---

## 9. Animation & Motion Testing

### Reduced Motion Preference
1. OS Settings:
   - **Windows:** Settings → Ease of Access → Display → Show animations
   - **macOS:** System Preferences → Accessibility → Display → Reduce motion
   - **iOS:** Settings → Accessibility → Motion
   - **Android:** Settings → Accessibility → Remove animations

2. Browser Tools:
   - Chrome DevTools → Rendering → Emulate CSS media feature prefers-reduced-motion

- [ ] Modal animation reduced/removed when setting enabled
- [ ] Modal still opens and closes properly
- [ ] No motion-induced accessibility issues

**Expected Result:** ✅ Component respects prefers-reduced-motion

---

## 10. Zoom & Magnification Testing

### Browser Zoom
- [ ] Zoom to 100% (baseline) - all text readable
- [ ] Zoom to 200% - no horizontal scroll needed
- [ ] Zoom to 300% - text still readable
- [ ] Focus indicators remain visible
- [ ] All buttons remain clickable

### Windows Magnifier
1. Press Windows key + plus sign (+)
2. Pan around zoomed content
3. Verify modal content remains accessible

**Expected Result:** ✅ Component remains fully functional at 200% zoom minimum

---

## 11. ARIA Attributes Verification

Check HTML source code:

- [ ] **Modal Container**
  ```html
  role="dialog" aria-modal="true" aria-labelledby="modalTitle"
  ```

- [ ] **Modal Title**
  ```html
  <h2 id="modalTitle">Dialog Title</h2>
  ```

- [ ] **Close Button**
  ```html
  <button aria-label="Close dialog">✕</button>
  ```

- [ ] **Form Labels**
  ```html
  <label for="fieldId">Label Text</label>
  <input id="fieldId" ... />
  ```

- [ ] **Required Fields**
  ```html
  <input aria-required="true" ... />
  ```

- [ ] **Error Association**
  ```html
  <input aria-describedby="errorId" ... />
  <div id="errorId" role="alert">Error message</div>
  ```

- [ ] **Form Status**
  ```html
  <div role="status" aria-live="polite" aria-atomic="true"></div>
  ```

**Expected Result:** ✅ All ARIA attributes present and correctly implemented

---

## 12. Automated Testing

### Using Browser Extensions

**axe DevTools (Recommended - Free)**
1. Install from Chrome/Firefox store
2. Right-click → Inspect with axe
3. Run scan
4. Review violations and best practices

**Expected Results:**
- No violations
- Accessibility checks pass
- No "Moderate" or "Serious" issues

**WAVE (WebAIM Evaluation Tool)**
1. Go to wave.webaim.org
2. Enter page URL
3. Review results

**Lighthouse (Chrome DevTools)**
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Run accessibility audit
4. Target 90+ score

**Expected Result:** ✅ All automated tests pass with no violations

---

## 13. Browser Compatibility

Test in:
- [ ] **Chrome** (latest) - Focus visible works
- [ ] **Firefox** (latest) - ARIA implemented
- [ ] **Safari** (latest) - Keyboard navigation
- [ ] **Edge** (latest) - Screen reader compatible
- [ ] **Mobile Browser** (iOS/Android) - Touch interaction

**Expected Result:** ✅ Component works consistently across modern browsers

---

## 14. Screen Reader Compatibility

Verify with:
- [ ] NVDA (Windows) - Free
- [ ] JAWS (Windows) - Premium
- [ ] VoiceOver (macOS/iOS) - Built-in
- [ ] TalkBack (Android) - Built-in

Test scenarios:
- [ ] Open modal, all content announced
- [ ] Fill form with error, error announced
- [ ] Submit with success, success announced
- [ ] Close modal, return to content

**Expected Result:** ✅ All content accessible to screen reader users

---

## Quick Testing Protocol (5 minutes)

If you have limited time, run these critical tests:

1. **Keyboard Only (1 min)**
   - Tab through modal, verify focus trap, press Escape to close

2. **Focus Indicators (1 min)**
   - Visual check - all interactive elements have clear focus

3. **Error Handling (1 min)**
   - Submit form without filling in - verify errors display

4. **Screen Reader (1 min)**
   - Run NVDA/JAWS for 10 seconds - verify title and labels announced

5. **Touch Test (1 min)**
   - Try on phone/tablet - verify buttons are tapable

**Result:** If all 5 pass, component is likely accessible

---

## Accessibility Score Target

| Aspect | Target | Priority |
|--------|--------|----------|
| Keyboard Navigation | 100% functional | Critical |
| Focus Indicators | 100% visible | Critical |
| Color Contrast | ≥4.5:1 (AA) | Critical |
| ARIA Attributes | Complete & correct | High |
| Screen Reader | Fully supported | High |
| Touch targets | ≥44x44px | Medium |
| Error messages | Clear & linked | High |

---

## Common Issues & Solutions

### Issue: Focus disappears after click
**Solution:** Add focus indicator back visibly in CSS

### Issue: Screen reader doesn't announce errors
**Solution:** Add `role="alert"` and ensure `aria-describedby` is linked

### Issue: Modal doesn't trap focus (Tab escapes)
**Solution:** Ensure `handleTabKeyNavigation` is implemented correctly

### Issue: Form validation doesn't run
**Solution:** Check that `novalidate` is on form and handler is attached

### Issue: Close button hard to click
**Solution:** Increase button size to minimum 44x44px

---

## Resources for More Testing

- **WebAIM:** https://webaim.org/
- **WCAG 2.1:** https://www.w3.org/WAI/WCAG21/quickref/
- **ARIA Practices:** https://www.w3.org/WAI/ARIA/apg/
- **MDN Accessibility:** https://developer.mozilla.org/en-US/docs/Web/Accessibility
- **Deque University:** https://dequeuniversity.com/

---

## Sign-Off Checklist

Before deploying to production:

- [ ] All keyboard navigation tests pass
- [ ] Focus indicators visible on all elements
- [ ] Color contrast verified (min 4.5:1 text, 3:1 UI)
- [ ] ARIA attributes complete and correct
- [ ] Screen reader tested (at least one: NVDA/JAWS/VoiceOver)
- [ ] Form validation working correctly
- [ ] Mobile/touch tested
- [ ] Responsive at all breakpoints
- [ ] Zoom to 200% tested
- [ ] Automated testing (axe/WAVE) passes
- [ ] Documentation reviewed with team

**Date Tested:** _______________
**Tester Name:** _______________
**All Tests Passed:** ☐ Yes ☐ No

---

**Last Updated:** March 2026
**Test Version:** 1.0
**WCAG Compliance:** 2.1 Level AA
