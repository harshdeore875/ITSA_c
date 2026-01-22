# 🚀 ITSA Website - Deployment Guide

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

#### Steps:
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/itsa-website.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select "React" as framework
   - Click "Deploy"
   - Done! Your site is live

#### Benefits:
- ✅ Free hosting
- ✅ Automatic deployments on git push
- ✅ Free SSL certificate
- ✅ CDN included
- ✅ Analytics dashboard

---

### Option 2: Netlify

#### Steps:
1. **Connect GitHub** (same as Vercel)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub
   - Choose your repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy"

#### Benefits:
- ✅ Free tier available
- ✅ Automatic deployments
- ✅ Form handling included
- ✅ Environment variables support

---

### Option 3: GitHub Pages

#### Steps:
1. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/<repo-name>/',
     // ... rest of config
   })
   ```

2. **Add deployment script to package.json**
   ```json
   "scripts": {
     "deploy": "npm run build && git add dist && git commit -m 'deploy' && git push"
   }
   ```

3. **Enable GitHub Pages**
   - Go to repository settings
   - Select "Pages"
   - Choose branch: `main`
   - Folder: `/ (root)`

#### Benefits:
- ✅ Completely free
- ✅ No separate hosting needed
- ✅ GitHub integration

---

### Option 4: Traditional Hosting (cPanel, etc.)

#### Steps:
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to hosting**
   - Connect via FTP
   - Upload entire `dist/` folder contents to `public_html/`

3. **Configure .htaccess** (for SPA routing)
   Create `.htaccess` file:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

#### Benefits:
- ✅ Full control over server
- ✅ Custom domain
- ✅ Email hosting

---

## Pre-Deployment Checklist

- [ ] All images added to `public/images/`
- [ ] All data updated in `src/data/`
- [ ] Links and emails updated
- [ ] Contact form email configured
- [ ] Meta tags updated
- [ ] No console errors
- [ ] Mobile responsiveness tested
- [ ] All pages working
- [ ] Animations smooth
- [ ] Load time acceptable

---

## Environment Variables (if needed)

Create `.env` file:
```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=itsa@ghrcem.ac.in
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## Performance Optimization

### Before Deployment:
1. **Optimize images**
   - Use WebP format
   - Compress with TinyPNG
   - Use appropriate dimensions

2. **Code optimization**
   ```bash
   npm run build
   ```

3. **Test build size**
   - Check `dist/` folder
   - Aim for <500KB total

4. **Test performance**
   - Lighthouse audit
   - WebPageTest
   - GTmetrix

### Production Checklist:
- [ ] Build passes without errors
- [ ] No console warnings
- [ ] All assets loading
- [ ] Fast initial load
- [ ] Smooth animations
- [ ] SEO tags present

---

## Domain Configuration

### Using Custom Domain:

1. **Vercel/Netlify:**
   - Domain settings → Add custom domain
   - Update DNS records
   - Wait for verification (up to 24 hours)

2. **GoDaddy/Namecheap:**
   - Update A record to hosting IP
   - Or use CNAME for provider
   - SSL auto-configured

### DNS Records Example:
```
Type: A
Name: @
Value: <hosting-provider-ip>

Type: CNAME
Name: www
Value: <hosting-provider-domain>
```

---

## SSL Certificate

Most hosting providers include free SSL:
- ✅ Vercel - Automatic
- ✅ Netlify - Automatic
- ✅ GitHub Pages - Automatic
- ✅ cPanel - Auto with AutoSSL

---

## Post-Deployment Testing

### Mobile Test:
- [ ] Responsive on all sizes
- [ ] Touch interactions work
- [ ] Images load properly
- [ ] Text readable

### Desktop Test:
- [ ] Navigation works
- [ ] Links functional
- [ ] Animations smooth
- [ ] Forms submit

### Browser Compatibility:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### SEO Check:
- [ ] Meta tags present
- [ ] Open Graph tags
- [ ] Sitemap generated
- [ ] robots.txt present

---

## Monitoring & Analytics

### Add Google Analytics:
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get measurement ID
3. Add to `src/App.jsx`:
```javascript
// Add Google Analytics script to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
```

### Monitor Performance:
- Check Core Web Vitals
- Monitor uptime
- Track user behavior
- Analyze conversion rates

---

## Maintenance & Updates

### Regular Tasks:
- Update events in `src/data/events.json`
- Add new gallery images
- Keep dependencies updated
- Monitor analytics
- Backup database

### Backup Strategy:
- Daily backups
- Version control with Git
- Test restore procedures

---

## Troubleshooting Deployment

### Issue: Build fails
**Solution:**
```bash
npm clean-install
npm run build
```

### Issue: Routes not working
**Solution:**
Add `_redirects` file in `public/`:
```
/*  /index.html  200
```

### Issue: Styles missing
**Solution:**
- Clear browser cache
- Rebuild: `npm run build`
- Check CSS file size

### Issue: Images not loading
**Solution:**
- Verify public folder structure
- Check image paths
- Test image URLs directly

---

## Performance Metrics

### Target Scores:
- Lighthouse: 90+
- Core Web Vitals: Good
- Page Load: <3 seconds
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s

### Improve Performance:
1. Enable gzip compression
2. Use CDN for images
3. Minify CSS/JS
4. Lazy load images
5. Remove unused code

---

## Scaling Considerations

### If traffic increases:
- CDN automatically handles load balancing
- Database optimization needed if added
- Consider serverless functions
- Monitor bandwidth usage

### High Traffic Optimization:
- Enable HTTP/2
- Use service workers
- Implement caching strategy
- Optimize database queries

---

## Cost Estimation (Monthly)

| Platform | Cost |
|----------|------|
| Vercel | Free - $20 |
| Netlify | Free - $15 |
| GitHub Pages | Free |
| Traditional Hosting | $5 - $20 |
| Custom Domain | $10 - $15 |

---

## Support & Help

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Netlify Help**: [netlify.com/support](https://netlify.com/support)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)

---

## Next Steps After Deployment

1. ✅ Share website link
2. ✅ Monitor analytics
3. ✅ Collect user feedback
4. ✅ Update content regularly
5. ✅ Plan improvements

---

**Your ITSA website is ready to go live! 🚀**
