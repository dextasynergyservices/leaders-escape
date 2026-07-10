<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design Rules
- **Mobile Responsiveness:** Always ensure mobile layouts are tightly packed to prevent excessive scrolling. Keep font sizes strictly reduced (e.g. `text-[28px]` or `text-[32px]` max for H2 headers, `text-[12px]` or `text-[13px]` for body copy), use `whitespace-nowrap` on badges to prevent wrapping, and reduce padding (e.g., `py-16`, `p-3`, `gap-3`) to make elements fit neatly into a single viewport on mobile without affecting desktop views.
