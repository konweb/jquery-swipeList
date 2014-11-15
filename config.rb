# Require any additional compass plugins here.

# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"
preferred_syntax = :sass
output_style = :expanded
line_comments = false
relative_assets = true
cache = false

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

require 'sass'

module Sass::Script
  class Color
    def to_s(opts = {})
      return rgba_str if alpha?
      return smallest# if options[:style] == :compressed
      #return COLOR_NAMES_REVERSE[rgb] if COLOR_NAMES_REVERSE[rgb]
      hex_str
    end
  end
end