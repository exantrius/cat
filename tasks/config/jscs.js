/**
 * @file: /tasks/config/js_cs.js
 * @author Andrew Sednev <exantrius@gmail.com>
 */
module.exports = function (grunt) {
    grunt.config.set('jscs', {
        options: {
            "requireCurlyBraces": [
                "if",
                "else",
                "for",
                "while",
                "do",
                "try",
                "catch"
            ],
            "requireOperatorBeforeLineBreak":         true,
            "requireCamelCaseOrUpperCaseIdentifiers": true,
            "maximumLineLength": {
                "value":         100,
                "allowComments": true,
                "allowRegex":    true
            },
            "validateIndentation": 4,
            "validateQuoteMarks":  "'",
            "validateLineBreaks":  "LF",

            "disallowMultipleLineStrings": true,
            "disallowMixedSpacesAndTabs":  true,
            "disallowTrailingWhitespace":  true,
            "disallowSpaceAfterPrefixUnaryOperators": true,
            "disallowMultipleVarDecl": true,

            "requireSpaceAfterKeywords": [
                "if",
                "else",
                "for",
                "while",
                "do",
                "switch",
                "return",
                "try",
                "catch"
            ],
            "requireSpaceBeforeBinaryOperators": [
                "=", "+=", "-=", "*=", "/=", "%=", "<<=", ">>=", ">>>=",
                "&=", "|=", "^=", "+=",

                "+", "-", "*", "/", "%", "<<", ">>", ">>>", "&",
                "|", "^", "&&", "||", "===", "==", ">=",
                "<=", "<", ">", "!=", "!=="
            ],
            "requireSpaceAfterBinaryOperators":     true,
            "requireSpacesInConditionalExpression": true,
            "requireSpaceBeforeBlockStatements":    true,
            "requireLineFeedAtFileEnd":             true,
            "disallowMultipleLineBreaks":           true,
            "disallowNewlineBeforeBlockStatements": true,
            "requireBlocksOnNewline":               true,

            "requireSpacesInFunctionExpression": {
                "beforeOpeningCurlyBrace": true,
                "beforeOpeningCurlyBrace": true
            },
            "requireSpacesInFunctionDeclaration": {
                "beforeOpeningRoundBrace": true,
                "beforeOpeningCurlyBrace": true
            },

            "requireCapitalizedConstructors": true,

            "disallowSpacesInCallExpression": true,

            "disallowSpacesInsideObjectBrackets": "all",
            "disallowSpacesInsideArrayBrackets":  "all",
            "disallowSpacesInsideParentheses":    true,
            "disallowSpaceAfterObjectKeys":       true,
            "requireSpaceBeforeObjectValues":     true,
            "requireSpaceBetweenArguments":       true,

            "disallowCommaBeforeLineBreak":   true,
            "disallowImplicitTypeConversion": true,

            "validateParameterSeparator": ", ",


            "disallowKeywordsOnNewLine": ["else"],

            //TODO
            "requireTrailingComma": {
                "ignoreSingleValue": true,
                "ignoreSingleLine":  true
            }
        },
        api: {
            files: {
                src: ['api/**/*.js']
            }
        },
        assets: {
            files: {
                src: ['tasks/pipeline.js']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jscs');
}