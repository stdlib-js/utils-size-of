<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sizeOf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the size (in bytes) of the canonical binary representation of a specified numeric type.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import sizeOf from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-size-of@esm/index.mjs';
```

#### sizeOf( dtype )

Returns the size (in bytes) of the canonical binary representation of a specified numeric type.

```javascript
var s = sizeOf( 'int8' );
// returns 1
```

The following numeric types are supported:

-   `float64`: double-precision floating-point numbers
-   `float32`: single-precision floating-point numbers
-   `float16`: half-precision floating-point numbers
-   `int32`: 32-bit two's complement signed integers
-   `uint32`: 32-bit unsigned integers
-   `int16`: 16-bit two's complement signed integers
-   `uint16`: 16-bit unsigned integers
-   `int8`: 8-bit two's complement signed integers
-   `uint8`: 8-bit unsigned integers
-   `uint8c`: 8-bit unsigned integers clamped to `0-255`
-   `complex128`: 128-bit complex numbers
-   `complex64`: 64-bit complex numbers

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import sizeOf from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-size-of@esm/index.mjs';

var s = sizeOf( 'float64' );
// returns 8

s = sizeOf( 'float32' );
// returns 4

s = sizeOf( 'float16' );
// returns 2

s = sizeOf( 'int32' );
// returns 4

s = sizeOf( 'uint32' );
// returns 4

s = sizeOf( 'int16' );
// returns 2

s = sizeOf( 'uint16' );
// returns 2

s = sizeOf( 'int8' );
// returns 1

s = sizeOf( 'uint8' );
// returns 1

s = sizeOf( 'uint8c' );
// returns 1

s = sizeOf( 'complex128' );
// returns 16

s = sizeOf( 'complex64' );
// returns 8

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for describing a command-line interface. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-real-max`][@stdlib/utils/real-max]</span><span class="delimiter">: </span><span class="description">return the maximum finite value capable of being represented by a numeric real type.</span>
-   <span class="package-name">[`@stdlib/utils-type-max`][@stdlib/utils/type-max]</span><span class="delimiter">: </span><span class="description">return the maximum value of a specified numeric type.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-size-of.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-size-of

[test-image]: https://github.com/stdlib-js/utils-size-of/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-size-of/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-size-of/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-size-of?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-size-of.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-size-of/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/utils-size-of#cli
[cli-url]: https://github.com/stdlib-js/utils-size-of/tree/cli
[@stdlib/utils-size-of]: https://github.com/stdlib-js/utils-size-of/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-size-of/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-size-of/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-size-of/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-size-of/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-size-of/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-size-of/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-size-of/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-size-of/main/LICENSE

<!-- <related-links> -->

[@stdlib/utils/real-max]: https://github.com/stdlib-js/utils-real-max/tree/esm

[@stdlib/utils/type-max]: https://github.com/stdlib-js/utils-type-max/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
