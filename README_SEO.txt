ZENKAI MEDIA - SEO & TECHNICAL MAINTENANCE GUIDE
==========================================

1. SEO Updates
-------------
- Meta titles and descriptions are in /assets/seo.json
- Update section data-attributes in index.html for dynamic meta updates
- Keep keywords natural, focus on user intent
- Maintain heading hierarchy (one H1, then H2 for sections)

2. Google Search Console
-----------------------
- Submit sitemap: https://search.google.com/search-console
- Add property: https://zenkaimedia.in/
- Verify ownership via HTML tag or DNS
- Monitor coverage, performance, and errors monthly

3. Analytics Setup
-----------------
- Replace G-XXXXXXXXXX with actual GA4 measurement ID
- Set up conversion events for contact buttons
- Configure goals for section visibility
- Track scroll depth and engagement

4. Rich Results Testing
----------------------
- Test structured data: https://search.google.com/test/rich-results
- Validate FAQ, Service, and Organization schemas
- Fix any errors or warnings promptly
- Re-test after content updates

5. Prerendering (Optional)
-------------------------
- If needed, set up prerendering via:
  * Netlify: Enable prerendering in build settings
  * Vercel: Add prerender configuration
  * prerender.io: Follow their integration guide
- This helps with dynamic meta tags indexing

6. Performance Monitoring
------------------------
- Run monthly Lighthouse audits
- Keep images optimized and lazy-loaded
- Monitor Core Web Vitals in Search Console
- Test mobile responsiveness regularly

7. Accessibility
---------------
- Maintain ARIA labels and roles
- Ensure sufficient color contrast (WCAG 2.1)
- Keep focus states visible
- Test with screen readers quarterly

8. Content Updates
-----------------
- Update case studies and portfolio regularly
- Refresh service descriptions every 3-6 months
- Add new structured data for new services
- Keep pricing and features current

For technical support or questions:
Contact the development team or refer to the technical documentation.