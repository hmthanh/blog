
module Jekyll
  module Converters
    class Markdown < Converter
      alias old_convert convert
      @@links = nil

      LINK_REGEX = /(\[[^\[\]]+?\])(?=\s*[^\[ (:])/ # http://rubular.com/r/ahGtMifv6C
      LABEL_REGEX = /(\[[^\[\]]+?\]):\s*(.+)/

      # return hash of label => link with keys normalised to lower case
      def labels_from(s)
        h = {}
        s.scan(LABEL_REGEX).flatten.each_slice(2) { |k| k.first.downcase!; h.store(*k) }
        h
      end

      def convert(content)
        # read and cache references from _references.md as hash of label => link
        if @@links.nil?
          refs_path = File.join(@config["source"], "_references.md")
          refs = if File.exist?(refs_path) then File.read(refs_path) else '' end
          @@links = labels_from refs
        end

        # Append labels for links where a label is absent from the content
        links = labels_from content
        content.scan(LINK_REGEX).flatten.uniq.each do |k|
          k.downcase!
          if !links.include?(k) and v = @@links[k]
            content << "\n#{k}:#{v}"
          end
        end
        old_convert(content)
      end
    end
  end
end