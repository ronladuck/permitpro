# Google Maps API Setup Guide

## Quick Setup (5 minutes)

### 1. Get Your API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create or Select Project**
   - Click "Select a project" dropdown
   - Click "New Project" or choose existing project
   - Give it a name like "PermitPro Maps"

3. **Enable Places API**
   - In the left sidebar, go to "APIs & Services" → "Library"
   - Search for "Places API"
   - Click on "Places API" 
   - Click "Enable"

4. **Create API Key**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API key"
   - Copy the API key (starts with `AIza...`)

### 2. Configure Your Application

**Option A: Environment Variable (Recommended)**

Create a `.env.local` file in your project root:

```bash
# .env.local
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyBOTI6srrmJRVKay1sxWKhUhKCrIGr3z
```

**Option B: Direct Configuration**

Edit `lib/googleMapsConfig.js`:

```javascript
export const GOOGLE_MAPS_CONFIG = {
  apiKey: 'AIzaSyBOTI6srrmJRVKay1sxWKhUhKCrIGr3z', // Your actual key
  libraries: ['places'],
  version: 'weekly'
}
```

### 3. Secure Your API Key (Important!)

1. **Restrict Your API Key:**
   - In Google Cloud Console, go to "Credentials"
   - Click on your API key
   - Under "API restrictions":
     - Select "Restrict key"
     - Choose "Places API"
   - Under "Website restrictions":
     - Select "HTTP referrers"
     - Add your domains:
       - `localhost:3000/*` (for development)
       - `localhost:3001/*` (backup port)
       - `yourdomain.com/*` (for production)

2. **Set Usage Limits:**
   - Go to "APIs & Services" → "Quotas"
   - Find "Places API"
   - Set daily limits to control costs

### 4. Test Your Setup

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Look for the status indicator:
   - ✅ **"Google Maps connected"** = Working correctly
   - ⚪ **"Using demo suggestions"** = API key not configured

3. Type in the address field:
   - Should show real addresses from Google
   - Look for "Verified address" badges
   - Footer should show "Powered by Google Maps"

## Pricing Information

- **Free Tier**: 40,000 requests per month
- **Cost**: $2.83 per 1,000 requests after free tier
- **Typical Usage**: Small apps usually stay within free tier

## Troubleshooting

### "Using demo suggestions" appears
- ✅ Check API key is correctly set
- ✅ Verify Places API is enabled
- ✅ Restart development server
- ✅ Check browser console for errors

### API errors in console
- ✅ Verify API key restrictions
- ✅ Check domain is whitelisted
- ✅ Ensure Places API is enabled

### Slow or no responses
- ✅ Check internet connection
- ✅ Verify API quotas not exceeded
- ✅ Check Google Cloud Console status

## Security Best Practices

1. **Never commit API keys** to version control
2. **Use environment variables** for API keys
3. **Restrict API key** to specific domains
4. **Set usage quotas** to prevent unexpected charges
5. **Monitor usage** in Google Cloud Console

## Support

- **Google Maps Documentation**: https://developers.google.com/maps/documentation
- **Places API Reference**: https://developers.google.com/maps/documentation/places/web-service
- **Billing Information**: https://cloud.google.com/maps-platform/pricing 