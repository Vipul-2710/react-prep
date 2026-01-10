1. Flexbox vs Grid in real projects?

Scenario:
Navbar + page layout.

Answer:

Flex → navbars, lists

Grid → page layout

2. Why display:none is dangerous?

Scenario:
Screen readers miss content.

Answer:
display:none removes accessibility tree.

3. Reflow vs repaint?

Scenario:
Animation janky.

Answer:
Avoid layout-triggering properties (top, left).
Prefer transform.

4. CSS specificity war?

Scenario:
Too many !important.

Answer:
Use BEM, layers, proper architecture.

5. CSS variables real usage?

Scenario:
Dark mode.

Answer:
Change theme dynamically without recompiling CSS.

6. Sticky header issues?

Scenario:
Overlaps content.

Answer:
Parent overflow breaks position: sticky.

7. Mobile 100vh problem?

Scenario:
Address bar resizing.

Answer:
Use svh, dvh units.

8. CSS Modules benefit?

Scenario:
Class name collision.

Answer:
Scoped styles prevent leaks.

9. Tailwind vs CSS?

Scenario:
Large team.

Answer:
Tailwind → consistency
CSS → semantic clarity

10. Z-index bugs?

Scenario:
Modal hidden.

Answer:
Stacking context issues, not z-index number.

11. will-change misuse?

Scenario:
Performance drop.

Answer:
Use sparingly; it allocates GPU memory.

12. Media query best practice?

Scenario:
Too many breakpoints.

Answer:
Design based on content, not devices.

13. CSS critical path?

Scenario:
Slow first paint.

Answer:
Inline critical CSS.

14. Aspect ratio real usage?

Scenario:
Video thumbnails.

Answer:
Prevents layout shift.

15. CSS containment?

Scenario:
Large component tree.

Answer:
Improves performance isolation.

16. Logical properties?

Scenario:
RTL languages.

Answer:
margin-inline-start supports localization.

17. CSS animations vs JS?

Scenario:
Smooth animations.

Answer:
CSS → better performance.

18. Overflow hidden dangers?

Scenario:
Sticky breaks.

Answer:
Overflow creates new context.

19. Font loading optimization?

Scenario:
FOIT issue.

Answer:
Use font-display: swap.

20. Grid auto-fit vs auto-fill?

Scenario:
Responsive cards.

Answer:
Auto-fit collapses empty tracks.

21. Deep nesting bad?

Scenario:
CSS hard to debug.

Answer:
Avoid over-specific selectors.

22. CSS layering?

Scenario:
Library override issues.

Answer:
Use @layer.

23. Why avoid universal selector?

Scenario:
Performance hit.

Answer:
It’s expensive on large DOMs.

24. CSS & accessibility?

Scenario:
Low contrast.

Answer:
WCAG contrast ratios must be met.

25. Senior CSS thinking?

Answer:
CSS is architecture + performance, not colors.