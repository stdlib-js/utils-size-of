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

// MODULES //

var tape = require( 'tape' );
var INT8 = require( '@stdlib/constants-int8-num-bytes' );
var UINT8 = require( '@stdlib/constants-uint8-num-bytes' );
var INT16 = require( '@stdlib/constants-int16-num-bytes' );
var UINT16 = require( '@stdlib/constants-uint16-num-bytes' );
var INT32 = require( '@stdlib/constants-int32-num-bytes' );
var UINT32 = require( '@stdlib/constants-uint32-num-bytes' );
var FLOAT16 = require( '@stdlib/constants-float16-num-bytes' );
var FLOAT32 = require( '@stdlib/constants-float32-num-bytes' );
var FLOAT64 = require( '@stdlib/constants-float64-num-bytes' );
var COMPLEX64 = require( '@stdlib/constants-complex64-num-bytes' );
var COMPLEX128 = require( '@stdlib/constants-complex128-num-bytes' );
var sizeOf = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof sizeOf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided an unknown numeric type, the function throws an error', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'double',
		'single',
		'half',
		'short',
		'long',
		'float',
		'integer',
		'int',
		'complex',
		'cmplx',
		'byte',
		'word',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			sizeOf( value );
		};
	}
});

tape( 'the function returns the size (in bytes) of the canonical binary representation of a specified numeric type', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		'complex128',
		'complex64',
		'float64',
		'float32',
		'float16',
		'int32',
		'uint32',
		'int16',
		'uint16',
		'int8',
		'uint8',
		'uint8c'
	];

	expected = [
		COMPLEX128,
		COMPLEX64,
		FLOAT64,
		FLOAT32,
		FLOAT16,
		INT32,
		UINT32,
		INT16,
		UINT16,
		INT8,
		UINT8,
		UINT8
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( sizeOf( values[i] ), expected[ i ], 'returns expected value for '+values[i] );
	}
	t.end();
});
