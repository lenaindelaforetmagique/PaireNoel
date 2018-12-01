// Transcrypt'ed from Python, 2018-12-01 15:19:58
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import {shuffle} from './random.js';
var __name__ = '__main__';
export var Person =  __class__ ('Person', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, py_name) {
		self.py_name = py_name;
		self.linked = set ();
		self.addLink (self);
	});},
	get addLink () {return __get__ (this, function (self, other) {
		self.linked.add (other);
	});},
	get toString () {return __get__ (this, function (self) {
		var t2 = (function () {
			var __accu0__ = [];
			for (var v of self.linked) {
				__accu0__.append (v.py_name);
			}
			return __accu0__;
		}) ();
		var s = ((self.py_name + ' {') + ' ; '.join (t2)) + '}';
		return s;
	});},
	get check () {return __get__ (this, function (self, other) {
		return !__in__ (other, self.linked);
	});}
});
export var Hat =  __class__ ('Hat', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.persons = list ([]);
		self.persons2 = list ([]);
	});},
	get addPerson () {return __get__ (this, function (self, py_name) {
		var alreadyExists = false;
		for (var p of self.persons) {
			var alreadyExists = alreadyExists || py_name == p.py_name;
		}
		if (alreadyExists) {
			print (py_name + ' already exists...');
		}
		else {
			self.persons.append (Person (py_name));
			self.persons2 = list ([]);
		}
	});},
	get addLink () {return __get__ (this, function (self, i, j) {
		self.persons [i].addLink (self.persons [j]);
		self.persons2 = list ([]);
	});},
	get testPerm () {return __get__ (this, function (self, perm, opt2cycle) {
		var res = true;
		for (var [i, p] of enumerate (self.persons)) {
			var res = res && p.check (self.persons [perm [i]]);
			if (opt2cycle) {
				var res = res && p.py_name != self.persons [perm [i]].py_name;
			}
		}
		return res;
	});},
	get findPerm () {return __get__ (this, function (self, opt2cycle) {
		if (typeof opt2cycle == 'undefined' || (opt2cycle != null && opt2cycle.hasOwnProperty ("__kwargtrans__"))) {;
			var opt2cycle = false;
		};
		var t = (function () {
			var __accu0__ = [];
			for (var i = 0; i < len (self.persons); i++) {
				__accu0__.append (i);
			}
			return __accu0__;
		}) ();
		while (!(self.testPerm (t, opt2cycle))) {
			shuffle (t);
		}
		self.persons2 = (function () {
			var __accu0__ = [];
			for (var i of t) {
				__accu0__.append (self.persons [i]);
			}
			return __accu0__;
		}) ();
	});},
	get resultLines () {return __get__ (this, function (self) {
		var t = list ([]);
		for (var i = 0; i < len (self.persons2); i++) {
			t.append ((self.persons [i].py_name + ' doit faire un cadeau à ') + self.persons2 [i].py_name);
		}
		return t;
	});}
});

//# sourceMappingURL=scriptNoel.map