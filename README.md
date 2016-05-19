# mathblarg

This is a script to take a Markdown file with MathJax-style LaTeX code
embedded in it, and to convert all the MathJax to SVG.  The upshot is
that the page should no longer need JS to be legible. At present
you'll lose all of the accessibility features MathJax support, though.

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

The math should be in `<math>$eqn$</math>` or `<math>$$eqn$$</math>` tags.
Basically `<math>...</math>` is an escape sequence, and you still need to
tell MathJax whether things are in display or inline mode. (You can also
use the usual `\(...\)` and `\[...\]` sequences if you like balanced
delimiters.)
