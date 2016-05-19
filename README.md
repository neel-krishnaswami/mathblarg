# mathblarg

This is a script to take an HTML file with MathJax embedded in it, and
to convert all the MathJax to SVG.  The upshot is that the page should
no longer need JS to be legible. At present you'll lose all of the
accessibility features MathJax support, though.

Intended for math blogging, hence the name. 

# Installation

You should have the following software installed:

* [PhantomJS](https://phantomjs.org) is used for 
* The [omd](https://github.com/ocaml/omd) Markdown processor. It's on
  [OPAM](https://opam.ocaml.org/).
* You'll need a local install of [MathJax](https://www.mathjax.org/).
  Either put in `~/MathJax`, or set the `MATHJAX` environment variable
  to say where it is.

# Usage

Run the `mathblarg` script on your markdown file. The result is dumped
to stdout:

    $ mathblarg foo.md > foo.html

