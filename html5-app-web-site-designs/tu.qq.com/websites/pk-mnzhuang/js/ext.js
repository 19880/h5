var BinaryFile = function(strData, iDataOffset, iDataLength) {
    var data = strData;
    var dataOffset = iDataOffset || 0;
    var dataLength = 0;

    this.getRawData = function() {
            return data;
    }

    if (typeof strData == "string") {
            dataLength = iDataLength || data.length;

            this.getByteAt = function(iOffset) {
                    return data.charCodeAt(iOffset + dataOffset) & 0xFF;
            }
            
            this.getBytesAt = function(iOffset, iLength) {
                    var aBytes = [];
                    
                    for (var i = 0; i < iLength; i++) {
                            aBytes[i] = data.charCodeAt((iOffset + i) + dataOffset) & 0xFF
                    };
                    
                    return aBytes;
            }
    } else if (typeof strData == "unknown") {
            dataLength = iDataLength || IEBinary_getLength(data);

            this.getByteAt = function(iOffset) {
                    return IEBinary_getByteAt(data, iOffset + dataOffset);
            }

            this.getBytesAt = function(iOffset, iLength) {
                    return new VBArray(IEBinary_getBytesAt(data, iOffset + dataOffset, iLength)).toArray();
            }
    }

    this.getLength = function() {
            return dataLength;
    }

    this.getSByteAt = function(iOffset) {
            var iByte = this.getByteAt(iOffset);
            if (iByte > 127)
                    return iByte - 256;
            else
                    return iByte;
    }

    this.getShortAt = function(iOffset, bBigEndian) {
            var iShort = bBigEndian ? 
                    (this.getByteAt(iOffset) << 8) + this.getByteAt(iOffset + 1)
                    : (this.getByteAt(iOffset + 1) << 8) + this.getByteAt(iOffset)
            if (iShort < 0) iShort += 65536;
            return iShort;
    }
    this.getSShortAt = function(iOffset, bBigEndian) {
            var iUShort = this.getShortAt(iOffset, bBigEndian);
            if (iUShort > 32767)
                    return iUShort - 65536;
            else
                    return iUShort;
    }
    this.getLongAt = function(iOffset, bBigEndian) {
            var iByte1 = this.getByteAt(iOffset),
                    iByte2 = this.getByteAt(iOffset + 1),
                    iByte3 = this.getByteAt(iOffset + 2),
                    iByte4 = this.getByteAt(iOffset + 3);

            var iLong = bBigEndian ? 
                    (((((iByte1 << 8) + iByte2) << 8) + iByte3) << 8) + iByte4
                    : (((((iByte4 << 8) + iByte3) << 8) + iByte2) << 8) + iByte1;
            if (iLong < 0) iLong += 4294967296;
            return iLong;
    }
    this.getSLongAt = function(iOffset, bBigEndian) {
            var iULong = this.getLongAt(iOffset, bBigEndian);
            if (iULong > 2147483647)
                    return iULong - 4294967296;
            else
                    return iULong;
    }

    this.getStringAt = function(iOffset, iLength) {
            var aStr = [];
            
            var aBytes = this.getBytesAt(iOffset, iLength);
            for (var j=0; j < iLength; j++) {
                    aStr[j] = String.fromCharCode(aBytes[j]);
            }
            return aStr.join("");
    }
    
    this.getCharAt = function(iOffset) {
            return String.fromCharCode(this.getByteAt(iOffset));
    }
    this.toBase64 = function() {
            return window.btoa(data);
    }
    this.fromBase64 = function(strBase64) {
            data = window.atob(strBase64);
    }
}



var EXIF = {};
 
(function() {
 
var bDebug = false;
 
EXIF.Tags = {
 
    // version tags
    0x9000 : "ExifVersion",         // EXIF version
    0xA000 : "FlashpixVersion",     // Flashpix format version
 
    // colorspace tags
    0xA001 : "ColorSpace",          // Color space information tag
 
    // image configuration
    0xA002 : "PixelXDimension",     // Valid width of meaningful image
    0xA003 : "PixelYDimension",     // Valid height of meaningful image
    0x9101 : "ComponentsConfiguration", // Information about channels
    0x9102 : "CompressedBitsPerPixel",  // Compressed bits per pixel
 
    // user information
    0x927C : "MakerNote",           // Any desired information written by the manufacturer
    0x9286 : "UserComment",         // Comments by user
 
    // related file
    0xA004 : "RelatedSoundFile",        // Name of related sound file
 
    // date and time
    0x9003 : "DateTimeOriginal",        // Date and time when the original image was generated
    0x9004 : "DateTimeDigitized",       // Date and time when the image was stored digitally
    0x9290 : "SubsecTime",          // Fractions of seconds for DateTime
    0x9291 : "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
    0x9292 : "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized
 
    // picture-taking conditions
    0x829A : "ExposureTime",        // Exposure time (in seconds)
    0x829D : "FNumber",         // F number
    0x8822 : "ExposureProgram",     // Exposure program
    0x8824 : "SpectralSensitivity",     // Spectral sensitivity
    0x8827 : "ISOSpeedRatings",     // ISO speed rating
    0x8828 : "OECF",            // Optoelectric conversion factor
    0x9201 : "ShutterSpeedValue",       // Shutter speed
    0x9202 : "ApertureValue",       // Lens aperture
    0x9203 : "BrightnessValue",     // Value of brightness
    0x9204 : "ExposureBias",        // Exposure bias
    0x9205 : "MaxApertureValue",        // Smallest F number of lens
    0x9206 : "SubjectDistance",     // Distance to subject in meters
    0x9207 : "MeteringMode",        // Metering mode
    0x9208 : "LightSource",         // Kind of light source
    0x9209 : "Flash",           // Flash status
    0x9214 : "SubjectArea",         // Location and area of main subject
    0x920A : "FocalLength",         // Focal length of the lens in mm
    0xA20B : "FlashEnergy",         // Strobe energy in BCPS
    0xA20C : "SpatialFrequencyResponse",    // 
    0xA20E : "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
    0xA20F : "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
    0xA210 : "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
    0xA214 : "SubjectLocation",     // Location of subject in image
    0xA215 : "ExposureIndex",       // Exposure index selected on camera
    0xA217 : "SensingMethod",       // Image sensor type
    0xA300 : "FileSource",          // Image source (3 == DSC)
    0xA301 : "SceneType",           // Scene type (1 == directly photographed)
    0xA302 : "CFAPattern",          // Color filter array geometric pattern
    0xA401 : "CustomRendered",      // Special processing
    0xA402 : "ExposureMode",        // Exposure mode
    0xA403 : "WhiteBalance",        // 1 = auto white balance, 2 = manual
    0xA404 : "DigitalZoomRation",       // Digital zoom ratio
    0xA405 : "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
    0xA406 : "SceneCaptureType",        // Type of scene
    0xA407 : "GainControl",         // Degree of overall image gain adjustment
    0xA408 : "Contrast",            // Direction of contrast processing applied by camera
    0xA409 : "Saturation",          // Direction of saturation processing applied by camera
    0xA40A : "Sharpness",           // Direction of sharpness processing applied by camera
    0xA40B : "DeviceSettingDescription",    // 
    0xA40C : "SubjectDistanceRange",    // Distance to subject
 
    // other tags
    0xA005 : "InteroperabilityIFDPointer",
    0xA420 : "ImageUniqueID"        // Identifier assigned uniquely to each image
};
 
EXIF.TiffTags = {
    0x0100 : "ImageWidth",
    0x0101 : "ImageHeight",
    0x8769 : "ExifIFDPointer",
    0x8825 : "GPSInfoIFDPointer",
    0xA005 : "InteroperabilityIFDPointer",
    0x0102 : "BitsPerSample",
    0x0103 : "Compression",
    0x0106 : "PhotometricInterpretation",
    0x0112 : "Orientation",
    0x0115 : "SamplesPerPixel",
    0x011C : "PlanarConfiguration",
    0x0212 : "YCbCrSubSampling",
    0x0213 : "YCbCrPositioning",
    0x011A : "XResolution",
    0x011B : "YResolution",
    0x0128 : "ResolutionUnit",
    0x0111 : "StripOffsets",
    0x0116 : "RowsPerStrip",
    0x0117 : "StripByteCounts",
    0x0201 : "JPEGInterchangeFormat",
    0x0202 : "JPEGInterchangeFormatLength",
    0x012D : "TransferFunction",
    0x013E : "WhitePoint",
    0x013F : "PrimaryChromaticities",
    0x0211 : "YCbCrCoefficients",
    0x0214 : "ReferenceBlackWhite",
    0x0132 : "DateTime",
    0x010E : "ImageDescription",
    0x010F : "Make",
    0x0110 : "Model",
    0x0131 : "Software",
    0x013B : "Artist",
    0x8298 : "Copyright"
}
 
EXIF.GPSTags = {
    0x0000 : "GPSVersionID",
    0x0001 : "GPSLatitudeRef",
    0x0002 : "GPSLatitude",
    0x0003 : "GPSLongitudeRef",
    0x0004 : "GPSLongitude",
    0x0005 : "GPSAltitudeRef",
    0x0006 : "GPSAltitude",
    0x0007 : "GPSTimeStamp",
    0x0008 : "GPSSatellites",
    0x0009 : "GPSStatus",
    0x000A : "GPSMeasureMode",
    0x000B : "GPSDOP",
    0x000C : "GPSSpeedRef",
    0x000D : "GPSSpeed",
    0x000E : "GPSTrackRef",
    0x000F : "GPSTrack",
    0x0010 : "GPSImgDirectionRef",
    0x0011 : "GPSImgDirection",
    0x0012 : "GPSMapDatum",
    0x0013 : "GPSDestLatitudeRef",
    0x0014 : "GPSDestLatitude",
    0x0015 : "GPSDestLongitudeRef",
    0x0016 : "GPSDestLongitude",
    0x0017 : "GPSDestBearingRef",
    0x0018 : "GPSDestBearing",
    0x0019 : "GPSDestDistanceRef",
    0x001A : "GPSDestDistance",
    0x001B : "GPSProcessingMethod",
    0x001C : "GPSAreaInformation",
    0x001D : "GPSDateStamp",
    0x001E : "GPSDifferential"
}
 
EXIF.StringValues = {
    ExposureProgram : {
        0 : "Not defined",
        1 : "Manual",
        2 : "Normal program",
        3 : "Aperture priority",
        4 : "Shutter priority",
        5 : "Creative program",
        6 : "Action program",
        7 : "Portrait mode",
        8 : "Landscape mode"
    },
    MeteringMode : {
        0 : "Unknown",
        1 : "Average",
        2 : "CenterWeightedAverage",
        3 : "Spot",
        4 : "MultiSpot",
        5 : "Pattern",
        6 : "Partial",
        255 : "Other"
    },
    LightSource : {
        0 : "Unknown",
        1 : "Daylight",
        2 : "Fluorescent",
        3 : "Tungsten (incandescent light)",
        4 : "Flash",
        9 : "Fine weather",
        10 : "Cloudy weather",
        11 : "Shade",
        12 : "Daylight fluorescent (D 5700 - 7100K)",
        13 : "Day white fluorescent (N 4600 - 5400K)",
        14 : "Cool white fluorescent (W 3900 - 4500K)",
        15 : "White fluorescent (WW 3200 - 3700K)",
        17 : "Standard light A",
        18 : "Standard light B",
        19 : "Standard light C",
        20 : "D55",
        21 : "D65",
        22 : "D75",
        23 : "D50",
        24 : "ISO studio tungsten",
        255 : "Other"
    },
    Flash : {
        0x0000 : "Flash did not fire",
        0x0001 : "Flash fired",
        0x0005 : "Strobe return light not detected",
        0x0007 : "Strobe return light detected",
        0x0009 : "Flash fired, compulsory flash mode",
        0x000D : "Flash fired, compulsory flash mode, return light not detected",
        0x000F : "Flash fired, compulsory flash mode, return light detected",
        0x0010 : "Flash did not fire, compulsory flash mode",
        0x0018 : "Flash did not fire, auto mode",
        0x0019 : "Flash fired, auto mode",
        0x001D : "Flash fired, auto mode, return light not detected",
        0x001F : "Flash fired, auto mode, return light detected",
        0x0020 : "No flash function",
        0x0041 : "Flash fired, red-eye reduction mode",
        0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
        0x0047 : "Flash fired, red-eye reduction mode, return light detected",
        0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
        0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
        0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
        0x0059 : "Flash fired, auto mode, red-eye reduction mode",
        0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
        0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
    },
    SensingMethod : {
        1 : "Not defined",
        2 : "One-chip color area sensor",
        3 : "Two-chip color area sensor",
        4 : "Three-chip color area sensor",
        5 : "Color sequential area sensor",
        7 : "Trilinear sensor",
        8 : "Color sequential linear sensor"
    },
    SceneCaptureType : {
        0 : "Standard",
        1 : "Landscape",
        2 : "Portrait",
        3 : "Night scene"
    },
    SceneType : {
        1 : "Directly photographed"
    },
    CustomRendered : {
        0 : "Normal process",
        1 : "Custom process"
    },
    WhiteBalance : {
        0 : "Auto white balance",
        1 : "Manual white balance"
    },
    GainControl : {
        0 : "None",
        1 : "Low gain up",
        2 : "High gain up",
        3 : "Low gain down",
        4 : "High gain down"
    },
    Contrast : {
        0 : "Normal",
        1 : "Soft",
        2 : "Hard"
    },
    Saturation : {
        0 : "Normal",
        1 : "Low saturation",
        2 : "High saturation"
    },
    Sharpness : {
        0 : "Normal",
        1 : "Soft",
        2 : "Hard"
    },
    SubjectDistanceRange : {
        0 : "Unknown",
        1 : "Macro",
        2 : "Close view",
        3 : "Distant view"
    },
    FileSource : {
        3 : "DSC"
    },
 
    Components : {
        0 : "",
        1 : "Y",
        2 : "Cb",
        3 : "Cr",
        4 : "R",
        5 : "G",
        6 : "B"
    }
}
 
function addEvent(oElement, strEvent, fncHandler) 
{
    if (oElement.addEventListener) { 
        oElement.addEventListener(strEvent, fncHandler, false); 
    } else if (oElement.attachEvent) { 
        oElement.attachEvent("on" + strEvent, fncHandler); 
    }
}
 
 
function imageHasData(oImg) 
{
    return !!(oImg.exifdata);
}
 
function getImageData(oImg, fncCallback) 
{
    BinaryAjax(
        oImg.src,
        function(oHTTP) {
            var oEXIF = findEXIFinJPEG(oHTTP.binaryResponse);
            oImg.exifdata = oEXIF || {};
            if (fncCallback) fncCallback();
        }
    )
}
 
function findEXIFinJPEG(oFile) {
    var aMarkers = [];
 
    if (oFile.getByteAt(0) != 0xFF || oFile.getByteAt(1) != 0xD8) {
        return false; // not a valid jpeg
    }
 
    var iOffset = 2;
    var iLength = oFile.getLength();
    while (iOffset < iLength) {
        if (oFile.getByteAt(iOffset) != 0xFF) {
            if (bDebug) console.log("Not a valid marker at offset " + iOffset + ", found: " + oFile.getByteAt(iOffset));
            return false; // not a valid marker, something is wrong
        }
 
        var iMarker = oFile.getByteAt(iOffset+1);
 
        // we could implement handling for other markers here, 
        // but we're only looking for 0xFFE1 for EXIF data
 
        if (iMarker == 22400) {
            if (bDebug) console.log("Found 0xFFE1 marker");
            return readEXIFData(oFile, iOffset + 4, oFile.getShortAt(iOffset+2, true)-2);
            iOffset += 2 + oFile.getShortAt(iOffset+2, true);
 
        } else if (iMarker == 225) {
            // 0xE1 = Application-specific 1 (for EXIF)
            if (bDebug) console.log("Found 0xFFE1 marker");
            return readEXIFData(oFile, iOffset + 4, oFile.getShortAt(iOffset+2, true)-2);
 
        } else {
            iOffset += 2 + oFile.getShortAt(iOffset+2, true);
        }
 
    }
 
}
 
 
function readTags(oFile, iTIFFStart, iDirStart, oStrings, bBigEnd) 
{
    var iEntries = oFile.getShortAt(iDirStart, bBigEnd);
    var oTags = {};
    for (var i=0;i<iEntries;i++) {
        var iEntryOffset = iDirStart + i*12 + 2;
        var strTag = oStrings[oFile.getShortAt(iEntryOffset, bBigEnd)];
        if (!strTag && bDebug) console.log("Unknown tag: " + oFile.getShortAt(iEntryOffset, bBigEnd));
        oTags[strTag] = readTagValue(oFile, iEntryOffset, iTIFFStart, iDirStart, bBigEnd);
    }
    return oTags;
}
 
 
function readTagValue(oFile, iEntryOffset, iTIFFStart, iDirStart, bBigEnd)
{
    var iType = oFile.getShortAt(iEntryOffset+2, bBigEnd);
    var iNumValues = oFile.getLongAt(iEntryOffset+4, bBigEnd);
    var iValueOffset = oFile.getLongAt(iEntryOffset+8, bBigEnd) + iTIFFStart;
 
    switch (iType) {
        case 1: // byte, 8-bit unsigned int
        case 7: // undefined, 8-bit byte, value depending on field
            if (iNumValues == 1) {
                return oFile.getByteAt(iEntryOffset + 8, bBigEnd);
            } else {
                var iValOffset = iNumValues > 4 ? iValueOffset : (iEntryOffset + 8);
                var aVals = [];
                for (var n=0;n<iNumValues;n++) {
                    aVals[n] = oFile.getByteAt(iValOffset + n);
                }
                return aVals;
            }
            break;
 
        case 2: // ascii, 8-bit byte
            var iStringOffset = iNumValues > 4 ? iValueOffset : (iEntryOffset + 8);
            return oFile.getStringAt(iStringOffset, iNumValues-1);
            break;
 
        case 3: // short, 16 bit int
            if (iNumValues == 1) {
                return oFile.getShortAt(iEntryOffset + 8, bBigEnd);
            } else {
                var iValOffset = iNumValues > 2 ? iValueOffset : (iEntryOffset + 8);
                var aVals = [];
                for (var n=0;n<iNumValues;n++) {
                    aVals[n] = oFile.getShortAt(iValOffset + 2*n, bBigEnd);
                }
                return aVals;
            }
            break;
 
        case 4: // long, 32 bit int
            if (iNumValues == 1) {
                return oFile.getLongAt(iEntryOffset + 8, bBigEnd);
            } else {
                var aVals = [];
                for (var n=0;n<iNumValues;n++) {
                    aVals[n] = oFile.getLongAt(iValueOffset + 4*n, bBigEnd);
                }
                return aVals;
            }
            break;
        case 5: // rational = two long values, first is numerator, second is denominator
            if (iNumValues == 1) {
                return oFile.getLongAt(iValueOffset, bBigEnd) / oFile.getLongAt(iValueOffset+4, bBigEnd);
            } else {
                var aVals = [];
                for (var n=0;n<iNumValues;n++) {
                    aVals[n] = oFile.getLongAt(iValueOffset + 8*n, bBigEnd) / oFile.getLongAt(iValueOffset+4 + 8*n, bBigEnd);
                }
                return aVals;
            }
            break;
        case 9: // slong, 32 bit signed int
            if (iNumValues == 1) {
                return oFile.getSLongAt(iEntryOffset + 8, bBigEnd);
            } else {
                var aVals = [];
                for (var n=0;n<iNumValues;n++) {
                    aVals[n] = oFile.getSLongAt(iValueOffset + 4*n, bBigEnd);
                }
                return aVals;
            }
            break;
        case 10: // signed rational, two slongs, first is numerator, second is denominator
            if (iNumValues == 1) {
                return oFile.getSLongAt(iValueOffset, bBigEnd) / oFile.getSLongAt(iValueOffset+4, bBigEnd);
            } else {
                var aVals = [];
                for (var n=0;n<iNumValues;n++) {
                    aVals[n] = oFile.getSLongAt(iValueOffset + 8*n, bBigEnd) / oFile.getSLongAt(iValueOffset+4 + 8*n, bBigEnd);
                }
                return aVals;
            }
            break;
    }
}
 
 
function readEXIFData(oFile, iStart, iLength) 
{
    if (oFile.getStringAt(iStart, 4) != "Exif") {
        if (bDebug) console.log("Not valid EXIF data! " + oFile.getStringAt(iStart, 4));
        return false;
    }
 
    var bBigEnd;
 
    var iTIFFOffset = iStart + 6;
 
    // test for TIFF validity and endianness
    if (oFile.getShortAt(iTIFFOffset) == 0x4949) {
        bBigEnd = false;
    } else if (oFile.getShortAt(iTIFFOffset) == 0x4D4D) {
        bBigEnd = true;
    } else {
        if (bDebug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
        return false;
    }
 
    if (oFile.getShortAt(iTIFFOffset+2, bBigEnd) != 0x002A) {
        if (bDebug) console.log("Not valid TIFF data! (no 0x002A)");
        return false;
    }
 
    if (oFile.getLongAt(iTIFFOffset+4, bBigEnd) != 0x00000008) {
        if (bDebug) console.log("Not valid TIFF data! (First offset not 8)", oFile.getShortAt(iTIFFOffset+4, bBigEnd));
        return false;
    }
 
    var oTags = readTags(oFile, iTIFFOffset, iTIFFOffset+8, EXIF.TiffTags, bBigEnd);
 
    if (oTags.ExifIFDPointer) {
        var oEXIFTags = readTags(oFile, iTIFFOffset, iTIFFOffset + oTags.ExifIFDPointer, EXIF.Tags, bBigEnd);
        for (var strTag in oEXIFTags) {
            switch (strTag) {
                case "LightSource" :
                case "Flash" :
                case "MeteringMode" :
                case "ExposureProgram" :
                case "SensingMethod" :
                case "SceneCaptureType" :
                case "SceneType" :
                case "CustomRendered" :
                case "WhiteBalance" : 
                case "GainControl" : 
                case "Contrast" :
                case "Saturation" :
                case "Sharpness" : 
                case "SubjectDistanceRange" :
                case "FileSource" :
                    oEXIFTags[strTag] = EXIF.StringValues[strTag][oEXIFTags[strTag]];
                    break;
    
                case "ExifVersion" :
                case "FlashpixVersion" :
                    oEXIFTags[strTag] = String.fromCharCode(oEXIFTags[strTag][0], oEXIFTags[strTag][1], oEXIFTags[strTag][2], oEXIFTags[strTag][3]);
                    break;
    
                case "ComponentsConfiguration" : 
                    oEXIFTags[strTag] = 
                        EXIF.StringValues.Components[oEXIFTags[strTag][0]]
                        + EXIF.StringValues.Components[oEXIFTags[strTag][1]]
                        + EXIF.StringValues.Components[oEXIFTags[strTag][2]]
                        + EXIF.StringValues.Components[oEXIFTags[strTag][3]];
                    break;
            }
            oTags[strTag] = oEXIFTags[strTag];
        }
    }
 
    if (oTags.GPSInfoIFDPointer) {
        var oGPSTags = readTags(oFile, iTIFFOffset, iTIFFOffset + oTags.GPSInfoIFDPointer, EXIF.GPSTags, bBigEnd);
        for (var strTag in oGPSTags) {
            switch (strTag) {
                case "GPSVersionID" : 
                    oGPSTags[strTag] = oGPSTags[strTag][0] 
                        + "." + oGPSTags[strTag][1] 
                        + "." + oGPSTags[strTag][2] 
                        + "." + oGPSTags[strTag][3];
                    break;
            }
            oTags[strTag] = oGPSTags[strTag];
        }
    }
 
    return oTags;
}
 
 
EXIF.getData = function(oImg, fncCallback) 
{
    if (!oImg.complete) return false;
    if (!imageHasData(oImg)) {
        getImageData(oImg, fncCallback);
    } else {
        if (fncCallback) fncCallback();
    }
    return true;
}
 
EXIF.getTag = function(oImg, strTag) 
{
    if (!imageHasData(oImg)) return;
    return oImg.exifdata[strTag];
}
 
EXIF.getAllTags = function(oImg) 
{
    if (!imageHasData(oImg)) return {};
    var oData = oImg.exifdata;
    var oAllTags = {};
    for (var a in oData) {
        if (oData.hasOwnProperty(a)) {
            oAllTags[a] = oData[a];
        }
    }
    return oAllTags;
}
 
 
EXIF.pretty = function(oImg) 
{
    if (!imageHasData(oImg)) return "";
    var oData = oImg.exifdata;
    var strPretty = "";
    for (var a in oData) {
        if (oData.hasOwnProperty(a)) {
            if (typeof oData[a] == "object") {
                strPretty += a + " : [" + oData[a].length + " values]\r\n";
            } else {
                strPretty += a + " : " + oData[a] + "\r\n";
            }
        }
    }
    return strPretty;
}
 
EXIF.readFromBinaryFile = function(oFile) {
    return findEXIFinJPEG(oFile);
}
 
function loadAllImages() 
{
    var aImages = document.getElementsByTagName("img");
    for (var i=0;i<aImages.length;i++) {
        if (aImages[i].getAttribute("exif") == "true") {
            if (!aImages[i].complete) {
                addEvent(aImages[i], "load", 
                    function() {
                        EXIF.getData(this);
                    }
                ); 
            } else {
                EXIF.getData(aImages[i]);
            }
        }
    }
}
 
addEvent(window, "load", loadAllImages); 
 
})();





(function() {

  /**
   * Detect subsampling in loaded image.
   * In iOS, larger images than 2M pixels may be subsampled in rendering.
   */
  function detectSubsampling(img) {
    var iw = img.naturalWidth, ih = img.naturalHeight;
    if (iw * ih > 1024 * 1024) { // subsampling may happen over megapixel image
      var canvas = document.createElement('canvas');
      canvas.width = canvas.height = 1;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, -iw + 1, 0);
      // subsampled image becomes half smaller in rendering size.
      // check alpha channel value to confirm image is covering edge pixel or not.
      // if alpha value is 0 image is not covering, hence subsampled.
      return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
    } else {
      return false;
    }
  }

  /**
   * Detecting vertical squash in loaded image.
   * Fixes a bug which squash image vertically while drawing into canvas for some images.
   */
  function detectVerticalSquash(img, iw, ih) {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = ih;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    var data = ctx.getImageData(0, 0, 1, ih).data;
    // search image edge pixel position in case it is squashed vertically.
    var sy = 0;
    var ey = ih;
    var py = ih;
    while (py > sy) {
      var alpha = data[(py - 1) * 4 + 3];
      if (alpha === 0) {
        ey = py;
      } else {
        sy = py;
      }
      py = (ey + sy) >> 1;
    }
    var ratio = (py / ih);
    return (ratio===0)?1:ratio;
  }

  /**
   * Rendering image element (with resizing) and get its data URL
   */
  function renderImageToDataURL(img, options, doSquash) {
    var canvas = document.createElement('canvas');
    renderImageToCanvas(img, canvas, options, doSquash);
    return canvas.toDataURL("image/jpeg", options.quality || 0.8);
  }

  /**
   * Rendering image element (with resizing) into the canvas element
   */
  function renderImageToCanvas(img, canvas, options, doSquash) {
    var iw = img.naturalWidth, ih = img.naturalHeight;
    if (!(iw+ih)) return;
    var width = options.width, height = options.height;
    var ctx = canvas.getContext('2d');
    ctx.save();
    transformCoordinate(canvas, ctx, width, height, options.orientation);
    var subsampled = detectSubsampling(img);
    if (subsampled) {
      iw /= 2;
      ih /= 2;
    }
    var d = 1024; // size of tiling canvas
    var tmpCanvas = document.createElement('canvas');
    tmpCanvas.width = tmpCanvas.height = d;
    var tmpCtx = tmpCanvas.getContext('2d');
    var vertSquashRatio = doSquash ? detectVerticalSquash(img, iw, ih) : 1;
    var dw = Math.ceil(d * width / iw);
    var dh = Math.ceil(d * height / ih / vertSquashRatio);
    var sy = 0;
    var dy = 0;
    while (sy < ih) {
      var sx = 0;
      var dx = 0;
      while (sx < iw) {
        tmpCtx.clearRect(0, 0, d, d);
        tmpCtx.drawImage(img, -sx, -sy);
        ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, dw, dh);
        sx += d;
        dx += dw;
      }
      sy += d;
      dy += dh;
    }
    ctx.restore();
    tmpCanvas = tmpCtx = null;
  }

  /**
   * Transform canvas coordination according to specified frame size and orientation
   * Orientation value is from EXIF tag
   */
  function transformCoordinate(canvas, ctx, width, height, orientation) {
    switch (orientation) {
      case 5:
      case 6:
      case 7:
      case 8:
        canvas.width = height;
        canvas.height = width;
        break;
      default:
        canvas.width = width;
        canvas.height = height;
    }
    switch (orientation) {
      case 2:
        // horizontal flip
        ctx.translate(width, 0);
        ctx.scale(-1, 1);
        break;
      case 3:
        // 180 rotate left
        ctx.translate(width, height);
        ctx.rotate(Math.PI);
        break;
      case 4:
        // vertical flip
        ctx.translate(0, height);
        ctx.scale(1, -1);
        break;
      case 5:
        // vertical flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.scale(1, -1);
        break;
      case 6:
        // 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(0, -height);
        break;
      case 7:
        // horizontal flip + 90 rotate right
        ctx.rotate(0.5 * Math.PI);
        ctx.translate(width, -height);
        ctx.scale(-1, 1);
        break;
      case 8:
        // 90 rotate left
        ctx.rotate(-0.5 * Math.PI);
        ctx.translate(-width, 0);
        break;
      default:
        break;
    }
  }

  var URL = window.URL && window.URL.createObjectURL ? window.URL :
            window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL :
            null;

  /**
   * MegaPixImage class
   */
  function MegaPixImage(srcImage) {
    if (window.Blob && srcImage instanceof Blob) {
      if (!URL) { throw Error("No createObjectURL function found to create blob url"); }
      var img = new Image();
      img.src = URL.createObjectURL(srcImage);
      this.blob = srcImage;
      srcImage = img;
    }
    if (!srcImage.naturalWidth && !srcImage.naturalHeight) {
      var _this = this;
      srcImage.onload = srcImage.onerror = function() {
        var listeners = _this.imageLoadListeners;
        if (listeners) {
          _this.imageLoadListeners = null;
          for (var i=0, len=listeners.length; i<len; i++) {
            listeners[i]();
          }
        }
      };
      this.imageLoadListeners = [];
    }
    this.srcImage = srcImage;
  }

  /**
   * Rendering megapix image into specified target element
   */
  MegaPixImage.prototype.render = function(target, options, callback) {
    if (this.imageLoadListeners) {
      var _this = this;
      this.imageLoadListeners.push(function() { _this.render(target, options, callback); });
      return;
    }
    options = options || {};
    var imgWidth = this.srcImage.naturalWidth, imgHeight = this.srcImage.naturalHeight,
        width = options.width, height = options.height,
        maxWidth = options.maxWidth, maxHeight = options.maxHeight,
        doSquash = !this.blob || this.blob.type === 'image/jpeg';
    if (width && !height) {
      height = (imgHeight * width / imgWidth) << 0;
    } else if (height && !width) {
      width = (imgWidth * height / imgHeight) << 0;
    } else {
      width = imgWidth;
      height = imgHeight;
    }
    if (maxWidth && width > maxWidth) {
      width = maxWidth;
      height = (imgHeight * width / imgWidth) << 0;
    }
    if (maxHeight && height > maxHeight) {
      height = maxHeight;
      width = (imgWidth * height / imgHeight) << 0;
    }
    var opt = {};
    for (var k in options) opt[k] = options[k];
    opt.width = width;
    opt.height = height;
    

    var tagName = target.tagName.toLowerCase();
    if (tagName === 'img') {
      target.src = renderImageToDataURL(this.srcImage, opt, doSquash);
    } else if (tagName === 'canvas') {
      renderImageToCanvas(this.srcImage, target, opt, doSquash);
    }
    if (typeof this.onrender === 'function') {
      this.onrender(target);
    }
    if (callback) {
      callback();
    }
    if (this.blob) {
      this.blob = null;
      URL.revokeObjectURL(this.srcImage.src);
    }
  };

  /**
   * Export class to global
   */
  if (typeof define === 'function' && define.amd) {
    define([], function() { return MegaPixImage; }); // for AMD loader
  } else {
    this.MegaPixImage = MegaPixImage;
  }

})();





function JPEGEncoder(quality) {
  var self = this;
    var fround = Math.round;
    var ffloor = Math.floor;
    var YTable = new Array(64);
    var UVTable = new Array(64);
    var fdtbl_Y = new Array(64);
    var fdtbl_UV = new Array(64);
    var YDC_HT;
    var UVDC_HT;
    var YAC_HT;
    var UVAC_HT;

    var bitcode = new Array(65535);
    var category = new Array(65535);
    var outputfDCTQuant = new Array(64);
    var DU = new Array(64);
    var byteout = [];
    var bytenew = 0;
    var bytepos = 7;

    var YDU = new Array(64);
    var UDU = new Array(64);
    var VDU = new Array(64);
    var clt = new Array(256);
    var RGB_YUV_TABLE = new Array(2048);
    var currentQuality;

    var ZigZag = [
             0, 1, 5, 6,14,15,27,28,
             2, 4, 7,13,16,26,29,42,
             3, 8,12,17,25,30,41,43,
             9,11,18,24,31,40,44,53,
            10,19,23,32,39,45,52,54,
            20,22,33,38,46,51,55,60,
            21,34,37,47,50,56,59,61,
            35,36,48,49,57,58,62,63
        ];

    var std_dc_luminance_nrcodes = [0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0];
    var std_dc_luminance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
    var std_ac_luminance_nrcodes = [0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,0x7d];
    var std_ac_luminance_values = [
            0x01,0x02,0x03,0x00,0x04,0x11,0x05,0x12,
            0x21,0x31,0x41,0x06,0x13,0x51,0x61,0x07,
            0x22,0x71,0x14,0x32,0x81,0x91,0xa1,0x08,
            0x23,0x42,0xb1,0xc1,0x15,0x52,0xd1,0xf0,
            0x24,0x33,0x62,0x72,0x82,0x09,0x0a,0x16,
            0x17,0x18,0x19,0x1a,0x25,0x26,0x27,0x28,
            0x29,0x2a,0x34,0x35,0x36,0x37,0x38,0x39,
            0x3a,0x43,0x44,0x45,0x46,0x47,0x48,0x49,
            0x4a,0x53,0x54,0x55,0x56,0x57,0x58,0x59,
            0x5a,0x63,0x64,0x65,0x66,0x67,0x68,0x69,
            0x6a,0x73,0x74,0x75,0x76,0x77,0x78,0x79,
            0x7a,0x83,0x84,0x85,0x86,0x87,0x88,0x89,
            0x8a,0x92,0x93,0x94,0x95,0x96,0x97,0x98,
            0x99,0x9a,0xa2,0xa3,0xa4,0xa5,0xa6,0xa7,
            0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,0xb5,0xb6,
            0xb7,0xb8,0xb9,0xba,0xc2,0xc3,0xc4,0xc5,
            0xc6,0xc7,0xc8,0xc9,0xca,0xd2,0xd3,0xd4,
            0xd5,0xd6,0xd7,0xd8,0xd9,0xda,0xe1,0xe2,
            0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,0xea,
            0xf1,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
            0xf9,0xfa
        ];

    var std_dc_chrominance_nrcodes = [0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0];
    var std_dc_chrominance_values = [0,1,2,3,4,5,6,7,8,9,10,11];
    var std_ac_chrominance_nrcodes = [0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,0x77];
    var std_ac_chrominance_values = [
            0x00,0x01,0x02,0x03,0x11,0x04,0x05,0x21,
            0x31,0x06,0x12,0x41,0x51,0x07,0x61,0x71,
            0x13,0x22,0x32,0x81,0x08,0x14,0x42,0x91,
            0xa1,0xb1,0xc1,0x09,0x23,0x33,0x52,0xf0,
            0x15,0x62,0x72,0xd1,0x0a,0x16,0x24,0x34,
            0xe1,0x25,0xf1,0x17,0x18,0x19,0x1a,0x26,
            0x27,0x28,0x29,0x2a,0x35,0x36,0x37,0x38,
            0x39,0x3a,0x43,0x44,0x45,0x46,0x47,0x48,
            0x49,0x4a,0x53,0x54,0x55,0x56,0x57,0x58,
            0x59,0x5a,0x63,0x64,0x65,0x66,0x67,0x68,
            0x69,0x6a,0x73,0x74,0x75,0x76,0x77,0x78,
            0x79,0x7a,0x82,0x83,0x84,0x85,0x86,0x87,
            0x88,0x89,0x8a,0x92,0x93,0x94,0x95,0x96,
            0x97,0x98,0x99,0x9a,0xa2,0xa3,0xa4,0xa5,
            0xa6,0xa7,0xa8,0xa9,0xaa,0xb2,0xb3,0xb4,
            0xb5,0xb6,0xb7,0xb8,0xb9,0xba,0xc2,0xc3,
            0xc4,0xc5,0xc6,0xc7,0xc8,0xc9,0xca,0xd2,
            0xd3,0xd4,0xd5,0xd6,0xd7,0xd8,0xd9,0xda,
            0xe2,0xe3,0xe4,0xe5,0xe6,0xe7,0xe8,0xe9,
            0xea,0xf2,0xf3,0xf4,0xf5,0xf6,0xf7,0xf8,
            0xf9,0xfa
        ];

    function initQuantTables(sf){
            var YQT = [
                16, 11, 10, 16, 24, 40, 51, 61,
                12, 12, 14, 19, 26, 58, 60, 55,
                14, 13, 16, 24, 40, 57, 69, 56,
                14, 17, 22, 29, 51, 87, 80, 62,
                18, 22, 37, 56, 68,109,103, 77,
                24, 35, 55, 64, 81,104,113, 92,
                49, 64, 78, 87,103,121,120,101,
                72, 92, 95, 98,112,100,103, 99
            ];

            for (var i = 0; i < 64; i++) {
                var t = ffloor((YQT[i]*sf+50)/100);
                if (t < 1) {
                    t = 1;
                } else if (t > 255) {
                    t = 255;
                }
                YTable[ZigZag[i]] = t;
            }
            var UVQT = [
                17, 18, 24, 47, 99, 99, 99, 99,
                18, 21, 26, 66, 99, 99, 99, 99,
                24, 26, 56, 99, 99, 99, 99, 99,
                47, 66, 99, 99, 99, 99, 99, 99,
                99, 99, 99, 99, 99, 99, 99, 99,
                99, 99, 99, 99, 99, 99, 99, 99,
                99, 99, 99, 99, 99, 99, 99, 99,
                99, 99, 99, 99, 99, 99, 99, 99
            ];
            for (var j = 0; j < 64; j++) {
                var u = ffloor((UVQT[j]*sf+50)/100);
                if (u < 1) {
                    u = 1;
                } else if (u > 255) {
                    u = 255;
                }
                UVTable[ZigZag[j]] = u;
            }
            var aasf = [
                1.0, 1.387039845, 1.306562965, 1.175875602,
                1.0, 0.785694958, 0.541196100, 0.275899379
            ];
            var k = 0;
            for (var row = 0; row < 8; row++)
            {
                for (var col = 0; col < 8; col++)
                {
                    fdtbl_Y[k]  = (1.0 / (YTable [ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                    fdtbl_UV[k] = (1.0 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0));
                    k++;
                }
            }
        }

        function computeHuffmanTbl(nrcodes, std_table){
            var codevalue = 0;
            var pos_in_table = 0;
            var HT = new Array();
            for (var k = 1; k <= 16; k++) {
                for (var j = 1; j <= nrcodes[k]; j++) {
                    HT[std_table[pos_in_table]] = [];
                    HT[std_table[pos_in_table]][0] = codevalue;
                    HT[std_table[pos_in_table]][1] = k;
                    pos_in_table++;
                    codevalue++;
                }
                codevalue*=2;
            }
            return HT;
        }

        function initHuffmanTbl()
        {
            YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes,std_dc_luminance_values);
            UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes,std_dc_chrominance_values);
            YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes,std_ac_luminance_values);
            UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes,std_ac_chrominance_values);
        }

        function initCategoryNumber()
        {
            var nrlower = 1;
            var nrupper = 2;
            for (var cat = 1; cat <= 15; cat++) {
                //Positive numbers
                for (var nr = nrlower; nr<nrupper; nr++) {
                    category[32767+nr] = cat;
                    bitcode[32767+nr] = [];
                    bitcode[32767+nr][1] = cat;
                    bitcode[32767+nr][0] = nr;
                }
                //Negative numbers
                for (var nrneg =-(nrupper-1); nrneg<=-nrlower; nrneg++) {
                    category[32767+nrneg] = cat;
                    bitcode[32767+nrneg] = [];
                    bitcode[32767+nrneg][1] = cat;
                    bitcode[32767+nrneg][0] = nrupper-1+nrneg;
                }
                nrlower <<= 1;
                nrupper <<= 1;
            }
        }

        function initRGBYUVTable() {
            for(var i = 0; i < 256;i++) {
                RGB_YUV_TABLE[i]              =  19595 * i;
                RGB_YUV_TABLE[(i+ 256)>>0]     =  38470 * i;
                RGB_YUV_TABLE[(i+ 512)>>0]     =   7471 * i + 0x8000;
                RGB_YUV_TABLE[(i+ 768)>>0]     = -11059 * i;
                RGB_YUV_TABLE[(i+1024)>>0]     = -21709 * i;
                RGB_YUV_TABLE[(i+1280)>>0]     =  32768 * i + 0x807FFF;
                RGB_YUV_TABLE[(i+1536)>>0]     = -27439 * i;
                RGB_YUV_TABLE[(i+1792)>>0]     = - 5329 * i;
            }
        }

        // IO functions
        function writeBits(bs)
        {
            var value = bs[0];
            var posval = bs[1]-1;
            while ( posval >= 0 ) {
                if (value & (1 << posval) ) {
                    bytenew |= (1 << bytepos);
                }
                posval--;
                bytepos--;
                if (bytepos < 0) {
                    if (bytenew == 0xFF) {
                        writeByte(0xFF);
                        writeByte(0);
                    }
                    else {
                        writeByte(bytenew);
                    }
                    bytepos=7;
                    bytenew=0;
                }
            }
        }

        function writeByte(value)
        {
            byteout.push(clt[value]); // write char directly instead of converting later
        }

        function writeWord(value)
        {
            writeByte((value>>8)&0xFF);
            writeByte((value   )&0xFF);
        }

        // DCT & quantization core
        function fDCTQuant(data, fdtbl)
        {
            var d0, d1, d2, d3, d4, d5, d6, d7;
            /* Pass 1: process rows. */
            var dataOff=0;
            var i;
            const I8 = 8;
            const I64 = 64;
            for (i=0; i<I8; ++i)
            {
                d0 = data[dataOff];
                d1 = data[dataOff+1];
                d2 = data[dataOff+2];
                d3 = data[dataOff+3];
                d4 = data[dataOff+4];
                d5 = data[dataOff+5];
                d6 = data[dataOff+6];
                d7 = data[dataOff+7];

                var tmp0 = d0 + d7;
                var tmp7 = d0 - d7;
                var tmp1 = d1 + d6;
                var tmp6 = d1 - d6;
                var tmp2 = d2 + d5;
                var tmp5 = d2 - d5;
                var tmp3 = d3 + d4;
                var tmp4 = d3 - d4;

                /* Even part */
                var tmp10 = tmp0 + tmp3;    /* phase 2 */
                var tmp13 = tmp0 - tmp3;
                var tmp11 = tmp1 + tmp2;
                var tmp12 = tmp1 - tmp2;

                data[dataOff] = tmp10 + tmp11; /* phase 3 */
                data[dataOff+4] = tmp10 - tmp11;

                var z1 = (tmp12 + tmp13) * 0.707106781; /* c4 */
                data[dataOff+2] = tmp13 + z1; /* phase 5 */
                data[dataOff+6] = tmp13 - z1;

                /* Odd part */
                tmp10 = tmp4 + tmp5; /* phase 2 */
                tmp11 = tmp5 + tmp6;
                tmp12 = tmp6 + tmp7;

                /* The rotator is modified from fig 4-8 to avoid extra negations. */
                var z5 = (tmp10 - tmp12) * 0.382683433; /* c6 */
                var z2 = 0.541196100 * tmp10 + z5; /* c2-c6 */
                var z4 = 1.306562965 * tmp12 + z5; /* c2+c6 */
                var z3 = tmp11 * 0.707106781; /* c4 */

                var z11 = tmp7 + z3;    /* phase 5 */
                var z13 = tmp7 - z3;

                data[dataOff+5] = z13 + z2;    /* phase 6 */
                data[dataOff+3] = z13 - z2;
                data[dataOff+1] = z11 + z4;
                data[dataOff+7] = z11 - z4;

                dataOff += 8; /* advance pointer to next row */
            }

            /* Pass 2: process columns. */
            dataOff = 0;
            for (i=0; i<I8; ++i)
            {
                d0 = data[dataOff];
                d1 = data[dataOff + 8];
                d2 = data[dataOff + 16];
                d3 = data[dataOff + 24];
                d4 = data[dataOff + 32];
                d5 = data[dataOff + 40];
                d6 = data[dataOff + 48];
                d7 = data[dataOff + 56];

                var tmp0p2 = d0 + d7;
                var tmp7p2 = d0 - d7;
                var tmp1p2 = d1 + d6;
                var tmp6p2 = d1 - d6;
                var tmp2p2 = d2 + d5;
                var tmp5p2 = d2 - d5;
                var tmp3p2 = d3 + d4;
                var tmp4p2 = d3 - d4;

                /* Even part */
                var tmp10p2 = tmp0p2 + tmp3p2;    /* phase 2 */
                var tmp13p2 = tmp0p2 - tmp3p2;
                var tmp11p2 = tmp1p2 + tmp2p2;
                var tmp12p2 = tmp1p2 - tmp2p2;

                data[dataOff] = tmp10p2 + tmp11p2; /* phase 3 */
                data[dataOff+32] = tmp10p2 - tmp11p2;

                var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781; /* c4 */
                data[dataOff+16] = tmp13p2 + z1p2; /* phase 5 */
                data[dataOff+48] = tmp13p2 - z1p2;

                /* Odd part */
                tmp10p2 = tmp4p2 + tmp5p2; /* phase 2 */
                tmp11p2 = tmp5p2 + tmp6p2;
                tmp12p2 = tmp6p2 + tmp7p2;

                /* The rotator is modified from fig 4-8 to avoid extra negations. */
                var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433; /* c6 */
                var z2p2 = 0.541196100 * tmp10p2 + z5p2; /* c2-c6 */
                var z4p2 = 1.306562965 * tmp12p2 + z5p2; /* c2+c6 */
                var z3p2 = tmp11p2 * 0.707106781; /* c4 */
                var z11p2 = tmp7p2 + z3p2;    /* phase 5 */
                var z13p2 = tmp7p2 - z3p2;

                data[dataOff+40] = z13p2 + z2p2; /* phase 6 */
                data[dataOff+24] = z13p2 - z2p2;
                data[dataOff+ 8] = z11p2 + z4p2;
                data[dataOff+56] = z11p2 - z4p2;

                dataOff++; /* advance pointer to next column */
            }

            // Quantize/descale the coefficients
            var fDCTQuant;
            for (i=0; i<I64; ++i)
            {
                // Apply the quantization and scaling factor & Round to nearest integer
                fDCTQuant = data[i]*fdtbl[i];
                outputfDCTQuant[i] = (fDCTQuant > 0.0) ? ((fDCTQuant + 0.5)|0) : ((fDCTQuant - 0.5)|0);
                //outputfDCTQuant[i] = fround(fDCTQuant);

            }
            return outputfDCTQuant;
        }

        function writeAPP0()
        {
            writeWord(0xFFE0); // marker
            writeWord(16); // length
            writeByte(0x4A); // J
            writeByte(0x46); // F
            writeByte(0x49); // I
            writeByte(0x46); // F
            writeByte(0); // = "JFIF",'\0'
            writeByte(1); // versionhi
            writeByte(1); // versionlo
            writeByte(0); // xyunits
            writeWord(1); // xdensity
            writeWord(1); // ydensity
            writeByte(0); // thumbnwidth
            writeByte(0); // thumbnheight
        }

        function writeSOF0(width, height)
        {
            writeWord(0xFFC0); // marker
            writeWord(17);   // length, truecolor YUV JPG
            writeByte(8);    // precision
            writeWord(height);
            writeWord(width);
            writeByte(3);    // nrofcomponents
            writeByte(1);    // IdY
            writeByte(0x11); // HVY
            writeByte(0);    // QTY
            writeByte(2);    // IdU
            writeByte(0x11); // HVU
            writeByte(1);    // QTU
            writeByte(3);    // IdV
            writeByte(0x11); // HVV
            writeByte(1);    // QTV
        }

        function writeDQT()
        {
            writeWord(0xFFDB); // marker
            writeWord(132);       // length
            writeByte(0);
            for (var i=0; i<64; i++) {
                writeByte(YTable[i]);
            }
            writeByte(1);
            for (var j=0; j<64; j++) {
                writeByte(UVTable[j]);
            }
        }

        function writeDHT()
        {
            writeWord(0xFFC4); // marker
            writeWord(0x01A2); // length

            writeByte(0); // HTYDCinfo
            for (var i=0; i<16; i++) {
                writeByte(std_dc_luminance_nrcodes[i+1]);
            }
            for (var j=0; j<=11; j++) {
                writeByte(std_dc_luminance_values[j]);
            }

            writeByte(0x10); // HTYACinfo
            for (var k=0; k<16; k++) {
                writeByte(std_ac_luminance_nrcodes[k+1]);
            }
            for (var l=0; l<=161; l++) {
                writeByte(std_ac_luminance_values[l]);
            }

            writeByte(1); // HTUDCinfo
            for (var m=0; m<16; m++) {
                writeByte(std_dc_chrominance_nrcodes[m+1]);
            }
            for (var n=0; n<=11; n++) {
                writeByte(std_dc_chrominance_values[n]);
            }

            writeByte(0x11); // HTUACinfo
            for (var o=0; o<16; o++) {
                writeByte(std_ac_chrominance_nrcodes[o+1]);
            }
            for (var p=0; p<=161; p++) {
                writeByte(std_ac_chrominance_values[p]);
            }
        }

        function writeSOS()
        {
            writeWord(0xFFDA); // marker
            writeWord(12); // length
            writeByte(3); // nrofcomponents
            writeByte(1); // IdY
            writeByte(0); // HTY
            writeByte(2); // IdU
            writeByte(0x11); // HTU
            writeByte(3); // IdV
            writeByte(0x11); // HTV
            writeByte(0); // Ss
            writeByte(0x3f); // Se
            writeByte(0); // Bf
        }

        function processDU(CDU, fdtbl, DC, HTDC, HTAC){
            var EOB = HTAC[0x00];
            var M16zeroes = HTAC[0xF0];
            var pos;
            const I16 = 16;
            const I63 = 63;
            const I64 = 64;
            var DU_DCT = fDCTQuant(CDU, fdtbl);
            //ZigZag reorder
            for (var j=0;j<I64;++j) {
                DU[ZigZag[j]]=DU_DCT[j];
            }
            var Diff = DU[0] - DC; DC = DU[0];
            //Encode DC
            if (Diff==0) {
                writeBits(HTDC[0]); // Diff might be 0
            } else {
                pos = 32767+Diff;
                writeBits(HTDC[category[pos]]);
                writeBits(bitcode[pos]);
            }
            //Encode ACs
            var end0pos = 63; // was const... which is crazy
            for (; (end0pos>0)&&(DU[end0pos]==0); end0pos--) {};
            //end0pos = first element in reverse order !=0
            if ( end0pos == 0) {
                writeBits(EOB);
                return DC;
            }
            var i = 1;
            var lng;
            while ( i <= end0pos ) {
                var startpos = i;
                for (; (DU[i]==0) && (i<=end0pos); ++i) {}
                var nrzeroes = i-startpos;
                if ( nrzeroes >= I16 ) {
                    lng = nrzeroes>>4;
                    for (var nrmarker=1; nrmarker <= lng; ++nrmarker)
                        writeBits(M16zeroes);
                    nrzeroes = nrzeroes&0xF;
                }
                pos = 32767+DU[i];
                writeBits(HTAC[(nrzeroes<<4)+category[pos]]);
                writeBits(bitcode[pos]);
                i++;
            }
            if ( end0pos != I63 ) {
                writeBits(EOB);
            }
            return DC;
        }

        function initCharLookupTable(){
            var sfcc = String.fromCharCode;
            for(var i=0; i < 256; i++){ ///// ACHTUNG // 255
                clt[i] = sfcc(i);
            }
        }

        this.encode = function(image,quality,toBase64) // image data object
        {
            var time_start = new Date().getTime();

            if(quality) setQuality(quality);

            // Initialize bit writer
            byteout = new Array();
            bytenew=0;
            bytepos=7;

            // Add JPEG headers
            writeWord(0xFFD8); // SOI
            writeAPP0();
            writeDQT();
            writeSOF0(image.width,image.height);
            writeDHT();
            writeSOS();

            // Encode 8x8 macroblocks
            var DCY=0;
            var DCU=0;
            var DCV=0;

            bytenew=0;
            bytepos=7;

            this.encode.displayName = "_encode_";

            var imageData = image.data;
            var width = image.width;
            var height = image.height;

            var quadWidth = width*4;
            var tripleWidth = width*3;

            var x, y = 0;
            var r, g, b;
            var start,p, col,row,pos;
            while(y < height){
                x = 0;
                while(x < quadWidth){
                start = quadWidth * y + x;
                p = start;
                col = -1;
                row = 0;

                for(pos=0; pos < 64; pos++){
                    row = pos >> 3;// /8
                    col = ( pos & 7 ) * 4; // %8
                    p = start + ( row * quadWidth ) + col;

                    if(y+row >= height){ // padding bottom
                        p-= (quadWidth*(y+1+row-height));
                    }

                    if(x+col >= quadWidth){ // padding right
                        p-= ((x+col) - quadWidth +4)
                    }

                    r = imageData[ p++ ];
                    g = imageData[ p++ ];
                    b = imageData[ p++ ];

                    /* // calculate YUV values dynamically
                    YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
                    UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
                    VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
                    */

                    // use lookup table (slightly faster)
                    YDU[pos] = ((RGB_YUV_TABLE[r]             + RGB_YUV_TABLE[(g +  256)>>0] + RGB_YUV_TABLE[(b +  512)>>0]) >> 16)-128;
                    UDU[pos] = ((RGB_YUV_TABLE[(r +  768)>>0] + RGB_YUV_TABLE[(g + 1024)>>0] + RGB_YUV_TABLE[(b + 1280)>>0]) >> 16)-128;
                    VDU[pos] = ((RGB_YUV_TABLE[(r + 1280)>>0] + RGB_YUV_TABLE[(g + 1536)>>0] + RGB_YUV_TABLE[(b + 1792)>>0]) >> 16)-128;

                }

                DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
                DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
                DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
                x+=32;
                }
                y+=8;
            }

            ////////////////////////////////////////////////////////////////

            // Do the bit alignment of the EOI marker
            if ( bytepos >= 0 ) {
                var fillbits = [];
                fillbits[1] = bytepos+1;
                fillbits[0] = (1<<(bytepos+1))-1;
                writeBits(fillbits);
            }

            writeWord(0xFFD9); //EOI

            if(!toBase64) {
                var data = byteout.slice(0);
                byteout = [];
                // benchmarking
                var duration = new Date().getTime() - time_start;
                console.log('Encoding time: '+ duration + 'ms');
                return data;
            }

            var jpegDataUri = 'data:image/jpeg;base64,' + btoa(byteout.join(''));

            byteout = [];

            // benchmarking
            var duration = new Date().getTime() - time_start;
            console.log('Encoding time: '+ duration + 'ms');
            //

            return jpegDataUri
    }

    function setQuality(quality){
        if (quality <= 0) {
            quality = 1;
        }
        if (quality > 100) {
            quality = 100;
        }

        if(currentQuality == quality) return // don't recalc if unchanged

        var sf = 0;
        if (quality < 50) {
            sf = Math.floor(5000 / quality);
        } else {
            sf = Math.floor(200 - quality*2);
        }

        initQuantTables(sf);
        currentQuality = quality;
        console.log('Quality set to: '+quality +'%');
    }

    function init(){
        var time_start = new Date().getTime();
        if(!quality) quality = 50;
        // Create tables
        initCharLookupTable()
        initHuffmanTbl();
        initCategoryNumber();
        initRGBYUVTable();

        setQuality(quality);
        var duration = new Date().getTime() - time_start;
        console.log('Initialization '+ duration + 'ms');
    }

    init();

};
