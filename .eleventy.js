// ============================================
// ELEVENTY CONFIGURATION
// This tells Eleventy where to find content,
// templates, and where to output the built site.
// ============================================

module.exports = function(eleventyConfig) {

  // Pass through static files (CSS, images, admin panel)
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/admin");

  // Create a "projects" collection from markdown files
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByTag("projects");
  });

  return {
    dir: {
      input: "src",          // Source files live here
      includes: "_includes", // Templates/layouts
      data: "_data",         // Global data (JSON files)
      output: "_site"        // Built site goes here
    },
    // Also process .md files in content/ folder
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk"
  };
};
