<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep certificate PDFs in `public/certificates/` and import their optimized cover locally so Vercel serves them without Lovable-only asset endpoints; certificate metadata stays in the shared portfolio data module.
- Add a page section as a component in `src/components/portfolio/`, render it in `src/routes/index.tsx` in the order it should appear, keep its content in the shared portfolio data module, and add its entry to the shared nav links list so the nav bar and footer stay in sync; keep every section's images bundled locally so the deployed site serves them itself.
