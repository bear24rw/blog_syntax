/**
 * SyntaxHighlighter - Linux command Brush
 *
 * @version
 * 1.0.0 (Oct 02 2009)
 *
 * @author
 * Shinya Kawamura
 *
 * @copyright
 * Copyright (C) 2009 Shinya Kawamura
 *
 * Licensed under a GNU Lesser General Public License.
 * http://creativecommons.org/licenses/LGPL/2.1/
 *
 *  Updated From:
 *  Code Syntax Highlighter for Objective-C.
 *  Version 0.0.2
 *  Copyright (C) 2006 Shin, YoungJin.
 */
SyntaxHighlighter.brushes.Command = function()
{
	var datatypes =	'char bool BOOL double float int long short id void';

	var keywords = 	'IBAction IBOutlet SEL YES NO readwrite readonly nonatomic nil NULL ' +
					'super self copy ' +
					'break case catch class const copy __finally __exception __try ' +
					'const_cast continue private public protected __declspec ' +
					'default delete deprecated dllexport dllimport do dynamic_cast ' +
					'else enum explicit extern if for friend goto inline ' +
					'mutable naked namespace new noinline noreturn nothrow ' +
					'register reinterpret_cast return selectany ' +
					'sizeof static static_cast struct switch template this ' +
					'thread throw true false try typedef typeid typename union ' +
					'using uuid virtual volatile whcar_t while'
					;
	// keywords += '@property @selector @interface @end @implementation @synthesize ';


	this.regexList = [
		{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },		// one line comments
		{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },		// multiline comments
		{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },		// double quoted strings
		{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },		// single quoted strings
		{ regex: new RegExp('^ *#.*', 'gm'),						css: 'preprocessor' },	// preprocessor
		{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'datatypes' },		// datatypes
		{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword' },		// keyword
		{ regex: new RegExp('\\bNS\\w+\\b', 'g'),					css: 'keyword' },		// keyword
		{ regex: new RegExp('@\\w+\\b', 'g'),						css: 'keyword' },		// keyword
		];

}

SyntaxHighlighter.brushes.Command.prototype = new SyntaxHighlighter.Highlighter();
SyntaxHighlighter.brushes.Command.aliases = ['command', 'terminal'];
