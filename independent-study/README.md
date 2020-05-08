# Code style
## Introduction
Code styles are the rules and conventions developers follow in order to facilitate better collaboration. Following these conventions makes code easier for others to read and understand by setting standards and expectations. Ideally, a project with multiple contributors will appear as though it were written by one developer. If a developer happens to leave a team, a new hire should be able to jump right in, read the code without a problem, and contribute seamlessly. Conversely, the departing team member won't be leaving with any information that remaining team members aren't able to decipher by simply reading the code. This particular consideration is increasingly important given the projected growth within the software development field. The United States Bureau of Labor Statistics projects that the field will grow by 21 percent through 2028. Meaning more and more developers will be working together on projects small and large. 

![labor stats](https://github.com/ShBodden/e28/blob/master/independent-study/images/labor-stats.png)

Aside from a general growth in the field, developers are entering the work force from different countries and speaking different languages. Many others, such as myself, are entering from different backgrounds as career changers. As someone with an art degree, learning to decipher code presented a challenge. In his book, ["Zen and the Art of Motorcycle Maintenance"](https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060589469), the late Robert Pirsig explains the difference between the view point of a classical thinker, such as an engineer, vs the way an artist may view the world. In describing the way an engineer sees the beauty within their work he writes, "There is a classic aesthetic which romantics often miss because of its subtlety. The classic style is straightforward, unadorned, unemotional, economical, and carefully proportioned. Its purpose is not to inspire emotionally, but to bring order out of chaos and make the unknown known." This concept precisely captures the goal of great code style. 

An early guide to code styles includes the popular ["The Elements of Programming Style"](https://www.amazon.com/Elements-Programming-Style-2nd/dp/0070342075) by Brian W. Kernighan and P. J. Plauger, published in 1974. Their book not only provides suggestions for formatting but also a set of easy to remember and practical lessons for programmers to call upon while writing code that others may read. Lessons such as, write clearly -- don't be too clever, make it right before you make it faster, and don't comment bad code -- rewrite it. 

Today, many open source projects have their own specific style guides for developers to follow. This can be very important for large and/or popular projects with thousands of developers either contributing to or incorporating a code base. One such set of style guides are the  [Google Style Guides.](http://google.github.io/styleguide/)

### Simple example
In the below examples, both will work in terms of html that will render on the screen. The first however, is a bit easier on the eyes and clearer to understand without the unnecessary spaces. It helps the reader easily identify chunks of code that work together. The other takes just a little bit longer to read because the extra spaces may initially appear to denote separate pieces of code. Multiplied by dozens or hundreds of lines of code, it makes a big difference. 
```html
<link rel="stylesheet"  href="styles.css">
```
```html
<link rel = "stylesheet" href = "styles.css">
```

Code styles generally should have no impact on the functionality or performance of the code itself, however proper formatting also ensures that the code will be able to properly interact with other technologies as well as future versions as best as possible. 

In the following example taken from the [Vue.js style guide](https://vuejs.org/v2/style-guide/), developers are asked to always name custom components using multiple words separated by a hyphen. While using a single word or words that are not separated by a hyphen may work, doing so assures that the component name won't conflict with HTML elements that either exist now or that could exist in the future. 

![future proof](https://github.com/ShBodden/e28/blob/master/independent-study/images/future-proof.png)

A common consideration in code styling is casing. The Vue.js style guide strongly recommends that single-file components should be consistent when following a casing convention. The provide the following explanation, "PascalCase works best with autocompletion in code editors, as it’s consistent with how we reference components in JS(X) and templates, wherever possible. However, mixed case filenames can sometimes create issues on case-insensitive file systems, which is why kebab-case is also perfectly acceptable."

![casing](https://github.com/ShBodden/e28/blob/master/independent-study/images/single-file-components-casing.png)

### Indentation
Another very common point of contention in code styling is spaces vs. tabs. The difference in performance is virtually non-existent and yet developers can be passionate when expressing their preference. For their part Google's style guide recommends the use of 2 spaces at a time, which is slightly more popular among developers. 

![indentation](https://github.com/ShBodden/e28/blob/master/independent-study/images/indentation.png)

The debate was famously settled by [Richard Hendricks](https://www.youtube.com/watch?time_continue=170&v=SsoOG6ZeyUI&feature=emb_logo)

In conclusion, formatting code according to a particular style guide will improve its subjective appearance but will also ensure it is compatible with features specific to the language it is written in as well as other languages that are likely to work in conjunction with the code. A more in-depth look at style guides goes beyond the basics of indentation, casing, and white space, but also into the use of tools specific to a given language. As the field of software development grows, so will the need to have a consistent set of rules. It is widely believed that in the future, a growing number of professionals in the workforce who aren't software developers, will need to have a basic understanding of how to read code and perform basic tasks using computer languages. Making a consensus in style increasingly important. 

### Resources
- [Bureau of Labor Statistics, U.S. Department of Labor, Occupational Outlook Handbook](https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm#tab-6)
- ["Zen and the Art of Motorcycle Maintenance"](https://www.amazon.com/Zen-Art-Motorcycle-Maintenance-Inquiry/dp/0060589469) by Robert Pirsig
- [Google Style Guides.](http://google.github.io/styleguide/)
- [w2schools.com HTML Style Guide](https://www.w3schools.com/html/html5_syntax.asp)
- ["The Elements of Programming Style"](https://www.amazon.com/Elements-Programming-Style-2nd/dp/0070342075) by Brian W. Kernighan and P. J. Plauger
- [Vue.js style guide](https://vuejs.org/v2/style-guide/)




