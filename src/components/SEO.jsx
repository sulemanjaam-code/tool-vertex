import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, path }) => {
  const siteName = 'ToolVortex';
  const fullTitle = `${title} | ${siteName}`;
  const url = `https://sulemanjaam.com${path || ''}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />

      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
