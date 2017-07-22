function encryptString(param1, param2) {
  var _loc3_ = null;
  var _loc4_ = 0;
  var _loc5_ = 0;
  var _loc6_ = 0;
  var _loc7_ = 0;
  var _loc8_ = 0;
  var _loc9_ = 0;
  var _loc10_ = 0;
  var _loc11_ = 0;
  var _loc12_ = 0;
  _loc3_ = '';
  _loc4_ = param2.length;
  _loc5_ = param1.length;
  _loc6_ = 0;
  _loc7_ = 0;
  while(_loc7_ < _loc5_)
  {
    _loc8_ = param1.charCodeAt(_loc7_);
    _loc9_ = param2.charCodeAt(_loc6_);
    _loc10_ = _loc8_ ^ _loc9_;
    _loc11_ = _loc10_ & 15;
    _loc12_ = _loc10_ & 240;
    _loc12_ = parseInt((_loc10_ & 240) / 16);
    _loc11_ = _loc11_ | 64;
    _loc12_ = _loc12_ | 64;
    _loc3_ = _loc3_ + String.fromCharCode(_loc11_);
    _loc3_ = _loc3_ + String.fromCharCode(_loc12_);
    _loc6_++;
    if(_loc6_ >= _loc4_)
    {
      _loc6_ = 0;
    }
    _loc7_++;
  }
  return _loc3_;
}

function decryptString(param1, param2)
{
  var _loc3_ = null;
  var _loc4_ = 0;
  var _loc5_ = 0;
  var _loc6_ = 0;
  var _loc7_ = 0;
  var _loc8_ = 0;
  var _loc9_ = 0;
  var _loc10_ = 0;
  var _loc11_ = 0;
  var _loc12_ = null;
  _loc3_ = '';
  _loc4_ = param2.length;
  _loc5_ = param1.length;
  _loc6_ = 0;
  _loc7_ = 0;
  while(_loc7_ < _loc5_)
  {
    _loc8_ = parseInt(param1.charCodeAt(_loc7_));
    _loc9_ = parseInt(param1.charCodeAt(_loc7_ + 1));
    _loc10_ = param2.charCodeAt(_loc6_);
    _loc8_ = _loc8_ & 31;
    _loc9_ = _loc9_ & 31;
    _loc9_ = parseInt((_loc9_ & 31) * 16);
    _loc11_ = parseInt((_loc9_ & 31) * 16) | _loc8_;
    _loc12_ = String.fromCharCode(_loc11_ ^ _loc10_);
    _loc3_ = _loc3_ + _loc12_;
    _loc6_++;
    if(_loc6_ >= _loc4_)
    {
      _loc6_ = 0;
    }
    _loc7_ = _loc7_ + 2;
  }
  return _loc3_;
}

module.exports.encryptString = encryptString;
module.exports.decryptString = decryptString;