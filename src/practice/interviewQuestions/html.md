1. Why should a senior developer care about semantic HTML?

Real-world scenario:
You build a news website. Without semantic tags, screen readers can’t differentiate navigation from main content.

Deep answer:
Semantic HTML improves:

Accessibility (screen readers understand structure)

SEO (search engines rank content better)

Maintainability (clear intent)

Using <article> for news cards and <nav> for menus helps assistive technologies jump sections easily.

2. Difference between <section> and <div> in production?

Scenario:
Your team reviews code and sees everything wrapped in <div>.

Answer:

<section> indicates logical grouping with meaning, while <div> is purely structural.

Use <section> when content has a heading and meaning.
Use <div> only for layout.

3. How does HTML affect performance?

Scenario:
Your React app loads slowly even before JS executes.

Answer:
Heavy DOM size, unnecessary wrappers, and blocking scripts slow rendering.

Optimizations:

Reduce DOM depth

Use defer for scripts

Avoid inline blocking styles
HTML is parsed before JS, so bad HTML = slow app.

4. async vs defer – real usage?

Scenario:
Analytics script breaks your app initialization.

Answer:

async: loads & executes immediately (order not guaranteed)

defer: loads in parallel, executes after HTML parse

👉 For analytics / ads → async
👉 For app scripts → defer

5. Accessibility mistake you’ve seen in real projects?

Scenario:
Clickable <div> used instead of <button>.

Problem:
Keyboard users cannot access it.

Fix:
Always use native elements. If not possible:

role="button"

tabindex="0"

Keyboard handlers

6. Why alt text matters beyond SEO?

Scenario:
E-commerce site for visually impaired users.

Answer:
Screen readers read alt.
Bad alt: "image1"
Good alt: "Red Nike Air Max running shoes"

7. When should you NOT use ARIA?

Scenario:
Developer adds ARIA roles everywhere.

Answer:
ARIA is a last resort.
Native HTML is always better.

Rule:

“No ARIA is better than bad ARIA”

8. HTML forms – native validation vs JS?

Scenario:
Form fails silently on mobile.

Answer:
Use native validation (required, type=email) for:

Accessibility

Mobile keyboard optimization

JS validation should enhance, not replace native.

9. Difference between cookies and localStorage (real auth use)?

Scenario:
JWT stored in localStorage → XSS attack.

Answer:

Cookies (httpOnly) → safer for auth

localStorage → accessible via JS

👉 Senior choice: httpOnly cookies

10. What breaks if IDs are duplicated?

Scenario:
document.getElementById returns wrong element.

Answer:
IDs must be unique or JS & accessibility tools behave unpredictably.

11. Why <main> tag matters?

Scenario:
Screen reader users complain.

Answer:

<main> helps assistive tech skip headers/nav directly to content.

12. Why lazy loading images is critical?

Scenario:
Product listing with 100 images.

Answer:
loading="lazy":

Faster first paint

Reduced bandwidth

Better Core Web Vitals

13. HTML role in SEO for React apps?

Scenario:
CSR app not ranking.

Answer:
Search engines need meaningful HTML.
SSR + semantic HTML improves crawlability.

14. <iframe> security concerns?

Scenario:
Embedding third-party payment page.

Answer:
Use:

sandbox="allow-scripts allow-same-origin"

Prevents malicious behavior.

15. DOM size impact?

Scenario:
Scrolling feels laggy.

Answer:
Large DOM = expensive reflow & repaint.

Rule of thumb:
👉 Keep DOM nodes under 1500–2000

16. What is progressive enhancement?

Scenario:
JS fails on low-end devices.

Answer:
Core HTML works first → CSS → JS enhancements.

17. HTML & Core Web Vitals?

Scenario:
Poor LCP score.

Answer:
Optimize:

Hero image size

Avoid render-blocking resources

Proper image dimensions

18. Why <label> is important?

Scenario:
Clicking label doesn’t focus input.

Answer:
Accessibility + usability issue.
Always associate labels.

19. <template> real usage?

Scenario:
Rendering large dynamic lists efficiently.

Answer:
Templates avoid immediate DOM rendering until needed.

20. Content Security Policy importance?

Scenario:
XSS attack injected script.

Answer:
CSP blocks inline scripts and unknown sources.

21. Mobile-first HTML?

Scenario:
Desktop-first breaks mobile UX.

Answer:
HTML structure must support mobile first layout.

22. Why headings order matters?

Scenario:
Random <h1> everywhere.

Answer:
Screen readers rely on heading hierarchy.

23. Why avoid inline styles?

Scenario:
Hard to maintain theme.

Answer:
Inline styles break reusability and caching.

24. When to use contenteditable?

Scenario:
Inline text editor.

Answer:
Use cautiously with sanitization.

25. Senior HTML mindset?

Answer:
HTML is not markup only — it defines:

Accessibility

Performance

SEO

UX foundation
