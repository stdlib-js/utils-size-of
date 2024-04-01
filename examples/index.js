/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var sizeOf = require( './../lib' );

var s = sizeOf( 'float64' );
console.log( s );
// => 8

s = sizeOf( 'float32' );
console.log( s );
// => 4

s = sizeOf( 'float16' );
console.log( s );
// => 2

s = sizeOf( 'int32' );
console.log( s );
// => 4

s = sizeOf( 'uint32' );
console.log( s );
// => 4

s = sizeOf( 'int16' );
console.log( s );
// => 2

s = sizeOf( 'uint16' );
console.log( s );
// => 2

s = sizeOf( 'int8' );
console.log( s );
// => 1

s = sizeOf( 'uint8' );
console.log( s );
// => 1

s = sizeOf( 'uint8c' );
console.log( s );
// => 1

s = sizeOf( 'complex128' );
console.log( s );
// => 16

s = sizeOf( 'complex64' );
console.log( s );
// => 8
