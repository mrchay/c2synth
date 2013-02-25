
// always have this to check this script exeuted in context
function injectedTest(){alert("injected");}

function GetMidiNote(midiNote) {	
	// work out note letter
	var oct = 5 - ( Math.floor( (128 - this.note) / 12 ) );
	var semi = (this.note) %12;
	var notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
	return "" + oct + "" + notes[semi];
};

(function() {/*
 A JavaScript implementation of the SHA family of hashes, as defined in FIPS
 PUB 180-2 as well as the corresponding HMAC implementation as defined in
 FIPS PUB 198a

 Copyright Brian Turek 2008-2012
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnson
*/
function k(a){throw a;}function s(a,e){var b=[],f=(1<<e)-1,c=a.length*e,d;for(d=0;d<c;d+=e)b[d>>>5]|=(a.charCodeAt(d/e)&f)<<32-e-d%32;return{value:b,binLen:c}}function u(a){var e=[],b=a.length,f,c;0!==b%2&&k("String of HEX type must be in byte increments");for(f=0;f<b;f+=2)c=parseInt(a.substr(f,2),16),isNaN(c)&&k("String of HEX type contains invalid characters"),e[f>>>3]|=c<<24-4*(f%8);return{value:e,binLen:4*b}}
function v(a){var e=[],b=0,f,c,d,g,h;-1===a.search(/^[a-zA-Z0-9=+\/]+$/)&&k("Invalid character in base-64 string");f=a.indexOf("=");a=a.replace(/\=/g,"");-1!==f&&f<a.length&&k("Invalid '=' found in base-64 string");for(c=0;c<a.length;c+=4){h=a.substr(c,4);for(d=g=0;d<h.length;d+=1)f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(h[d]),g|=f<<18-6*d;for(d=0;d<h.length-1;d+=1)e[b>>2]|=(g>>>16-8*d&255)<<24-8*(b%4),b+=1}return{value:e,binLen:8*b}}
function w(a,e){var b="",f=4*a.length,c,d;for(c=0;c<f;c+=1)d=a[c>>>2]>>>8*(3-c%4),b+="0123456789abcdef".charAt(d>>>4&15)+"0123456789abcdef".charAt(d&15);return e.outputUpper?b.toUpperCase():b}
function x(a,e){var b="",f=4*a.length,c,d,g;for(c=0;c<f;c+=3){g=(a[c>>>2]>>>8*(3-c%4)&255)<<16|(a[c+1>>>2]>>>8*(3-(c+1)%4)&255)<<8|a[c+2>>>2]>>>8*(3-(c+2)%4)&255;for(d=0;4>d;d+=1)b=8*c+6*d<=32*a.length?b+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(g>>>6*(3-d)&63):b+e.b64Pad}return b}
function y(a){var e={outputUpper:!1,b64Pad:"="};try{a.hasOwnProperty("outputUpper")&&(e.outputUpper=a.outputUpper),a.hasOwnProperty("b64Pad")&&(e.b64Pad=a.b64Pad)}catch(b){}"boolean"!==typeof e.outputUpper&&k("Invalid outputUpper formatting option");"string"!==typeof e.b64Pad&&k("Invalid b64Pad formatting option");return e}function z(a,e){var b=(a&65535)+(e&65535);return((a>>>16)+(e>>>16)+(b>>>16)&65535)<<16|b&65535}
function A(a,e,b,f,c){var d=(a&65535)+(e&65535)+(b&65535)+(f&65535)+(c&65535);return((a>>>16)+(e>>>16)+(b>>>16)+(f>>>16)+(c>>>16)+(d>>>16)&65535)<<16|d&65535}
function B(a,e){var b=[],f,c,d,g,h,C,t,j,D,l=[1732584193,4023233417,2562383102,271733878,3285377520],n=[1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1518500249,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,1859775393,
1859775393,1859775393,1859775393,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,2400959708,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782,3395469782];a[e>>>5]|=128<<24-e%32;a[(e+
65>>>9<<4)+15]=e;D=a.length;for(t=0;t<D;t+=16){f=l[0];c=l[1];d=l[2];g=l[3];h=l[4];for(j=0;80>j;j+=1)b[j]=16>j?a[j+t]:(b[j-3]^b[j-8]^b[j-14]^b[j-16])<<1|(b[j-3]^b[j-8]^b[j-14]^b[j-16])>>>31,C=20>j?A(f<<5|f>>>27,c&d^~c&g,h,n[j],b[j]):40>j?A(f<<5|f>>>27,c^d^g,h,n[j],b[j]):60>j?A(f<<5|f>>>27,c&d^c&g^d&g,h,n[j],b[j]):A(f<<5|f>>>27,c^d^g,h,n[j],b[j]),h=g,g=d,d=c<<30|c>>>2,c=f,f=C;l[0]=z(f,l[0]);l[1]=z(c,l[1]);l[2]=z(d,l[2]);l[3]=z(g,l[3]);l[4]=z(h,l[4])}return l}
window.jsSHA=function(a,e,b){var f=null,c=0,d=[0],g=0,h=null,g="undefined"!==typeof b?b:8;8===g||16===g||k("charSize must be 8 or 16");"HEX"===e?(0!==a.length%2&&k("srcString of HEX type must be in byte increments"),h=u(a),c=h.binLen,d=h.value):"ASCII"===e||"TEXT"===e?(h=s(a,g),c=h.binLen,d=h.value):"B64"===e?(h=v(a),c=h.binLen,d=h.value):k("inputFormat must be HEX, TEXT, ASCII, or B64");this.getHash=function(b,a,e){var g=null,h=d.slice(),n="";switch(a){case "HEX":g=w;break;case "B64":g=x;break;default:k("format must be HEX or B64")}"SHA-1"===
b?(null===f&&(f=B(h,c)),n=g(f,y(e))):k("Chosen SHA variant is not supported");return n};this.getHMAC=function(b,a,e,f,h){var n,p,m,E,r,F,G=[],H=[],q=null;switch(f){case "HEX":n=w;break;case "B64":n=x;break;default:k("outputFormat must be HEX or B64")}"SHA-1"===e?(m=64,F=160):k("Chosen SHA variant is not supported");"HEX"===a?(q=u(b),r=q.binLen,p=q.value):"ASCII"===a||"TEXT"===a?(q=s(b,g),r=q.binLen,p=q.value):"B64"===a?(q=v(b),r=q.binLen,p=q.value):k("inputFormat must be HEX, TEXT, ASCII, or B64");
b=8*m;a=m/4-1;m<r/8?("SHA-1"===e?p=B(p,r):k("Unexpected error in HMAC implementation"),p[a]&=4294967040):m>r/8&&(p[a]&=4294967040);for(m=0;m<=a;m+=1)G[m]=p[m]^909522486,H[m]=p[m]^1549556828;"SHA-1"===e?E=B(H.concat(B(G.concat(d),b+c)),b+F):k("Unexpected error in HMAC implementation");return n(E,y(h))}};})();

	
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NoteSynth: represents a single note
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// synth reduced for javascript based on
// Sonant for JavaScript, v1.0
// This is a port of the Sonant player routine, originally written in C by
// Jake Taylor (Ferris / Youth Uprising).
// Copyright (c) 2008-2009 Jake Taylor
// Copyright (c) 2011 Marcus Geelnard

function NoteSynth(synthConfig) {
	
	// wav config
    this.WAVE_SPS = 44100;                    // Samples per second
    this.WAVE_CHAN = 2;                       // Channels
    this.WAVE_SIZE = this.WAVE_SPS * (synthConfig.sample_len/1000);	  // how many seconds is buffer
 
    // canvas image buffer for WAV data (faster than JS array)
    this.chnBufWork = null;
	
	// save the canvas as well for vis
	this.canvas = null;
	
	// save the synth config (patch)
	this.synthConfig = synthConfig;
	
	this.init = function () {
		// create image array to work on wave data
		var size = Math.ceil(Math.sqrt(this.WAVE_SIZE * this.WAVE_CHAN / 2));
        var c = document.createElement('canvas');
		var ctx = c.getContext('2d');
        this.chnBufWork = ctx.createImageData(size, size);	
		this.canvas = c;
    };
	
	// global osc functions
    function osc_sin(value) 	{return Math.sin(value * 6.283184);}
    function osc_square(value)	{if(osc_sin(value) < 0) return -1; return 1;}
    function osc_saw(value)		{return (value % 1) - 0.5;}
    function osc_tri(value)		{var v2 = (value % 1) * 4;if(v2 < 2) return v2 - 1;return 3 - v2;}
	function getnotefreq(n)		{return 0.00390625 * Math.pow(1.059463094, n - 128);}
	
	
	this.generate = function (note)
    {
        // Array of oscillator functions
        var oscillators =
        [
            osc_sin,
            osc_square,
            osc_saw,
            osc_tri
        ];

        // temps
        var i, j, k, b, p, row, n, currentpos, cp,
            c1, c2, q, low, band, high, t, lfor, e, x,
            rsample, f, da, o1t, o2t;

        // load into locals (profiles slightly faster)
        var chnBuf = this.chnBufWork,
            waveSamples = this.WAVE_SIZE,
            waveBytes = this.WAVE_SIZE * this.WAVE_CHAN * 2,
            instr = this.synthConfig,
            osc_lfo = oscillators[instr.lfo_waveform],
            osc1 = oscillators[instr.osc1_waveform],
            osc2 = oscillators[instr.osc2_waveform],
            attack = instr.env_attack,
            sustain = instr.env_sustain,
            release = instr.env_release,
			rowLen = 5000,
			panFreq = Math.pow(2, instr.fx_pan_freq - 8) / rowLen,
            lfoFreq = Math.pow(2, instr.lfo_freq - 8) / rowLen,
			WAVE_SPS = this.WAVE_SPS;

        // Clear buffer
        for(b = 0; b < waveBytes; b += 2)
        {
            chnBuf[b] = 0;
            chnBuf[b+1] = 128;
        }

        var n = note + 60;
		
		var c1 = 0,
			c2 = 0;	

		// Precalculate frequencues
		o1t = getnotefreq(n + (instr.osc1_oct - 8) * 12 + instr.osc1_det) * (1 + 0.0008 * instr.osc1_detune);
		o2t = getnotefreq(n + (instr.osc2_oct - 8) * 12 + instr.osc2_det) * (1 + 0.0008 * instr.osc2_detune);
		
		// State variable init
		q = instr.fx_resonance / 255;
		
		low = band = 0;
		for (j = attack + sustain + release - 1; j >= 0; --j)
		{
			k = j + 0;

			// LFO
			lfor = osc_lfo(k * lfoFreq) * instr.lfo_amt / 512 + 0.5;

			// Envelope
			e = 1;
			if(j < attack)
				e = j / attack;
			else if(j >= attack + sustain)
				e -= (j - attack - sustain) / release;

			// Oscillator 1
			t = o1t;
			if(instr.lfo_osc1_freq) t += lfor;
			if(instr.osc1_xenv) t *= e * e;
			c1 += t;
			rsample = osc1(c1) * instr.osc1_vol;

			// Oscillator 2
			t = o2t;
			if(instr.osc2_xenv) t *= e * e;
			c2 += t;
			rsample += osc2(c2) * instr.osc2_vol;

			// Noise oscillator
			if(instr.noise_fader) rsample += (2*Math.random()-1) * instr.noise_fader * e;

			rsample *= e / 255;

			// State variable filter
			f = instr.fx_freq;
			if(instr.lfo_fx_freq) f *= lfor;
			f = 1.5 * Math.sin(f * 3.141592 / WAVE_SPS);
			low += f * band;
			high = q * (rsample - band) - low;
			band += f * high;
			switch(instr.fx_filter)
			{
				case 1: // Hipass
					rsample = high;
					break;
				case 2: // Lopass
					rsample = low;
					break;
				case 3: // Bandpass
					rsample = band;
					break;
				case 4: // Notch
					rsample = low + high;
				default:
			}

			// Panning & master volume
			t = osc_sin(k * panFreq) * instr.fx_pan_amt / 512 + 0.5;
			rsample *= 39 * instr.env_master;
			


			// Add to 16-bit channel buffer
			k <<= 2;
			x = chnBuf[k] + (chnBuf[k+1] << 8) + rsample * (1 - t);
			chnBuf[k] = x & 255;
			chnBuf[k+1] = (x >> 8) & 255;
			x = chnBuf[k+2] + (chnBuf[k+3] << 8) + rsample * t;
			chnBuf[k+2] = x & 255;
			chnBuf[k+3] = (x >> 8) & 255;
		}
			
        // Delay
        p = (instr.fx_delay_time * rowLen) >> 1;
        t = instr.fx_delay_amt / 255;

        for(n = 0; n < waveSamples - p; ++n)
        {
            b = 4 * n;
            k = 4 * (n + p);

            // Left channel = left + right[-p] * t
            x = chnBuf[k] + (chnBuf[k+1] << 8) +
                (chnBuf[b+2] + (chnBuf[b+3] << 8) - 32768) * t;
            chnBuf[k] = x & 255;
            chnBuf[k+1] = (x >> 8) & 255;

            // Right channel = right + left[-p] * t
            x = chnBuf[k+2] + (chnBuf[k+3] << 8) +
                (chnBuf[b] + (chnBuf[b+1] << 8) - 32768) * t;
            chnBuf[k+2] = x & 255;
            chnBuf[k+3] = (x >> 8) & 255;
        }
	};

    this.createAudio = function()
    {
        // Local variables
        var b, k, x, wave, l1, l2, s, y;

        // Turn critical object properties into local variables (performance)
        var mixBuf = this.chnBufWork,
            waveBytes = this.WAVE_SIZE * this.WAVE_CHAN * 2;

        // Convert to a WAVE file (in a binary string)
        l1 = waveBytes - 8;
        l2 = l1 - 36;
        wave = String.fromCharCode(82,73,70,70,
                                   l1 & 255,(l1 >> 8) & 255,(l1 >> 16) & 255,(l1 >> 24) & 255,
                                   87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,
                                   68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,
                                   l2 & 255,(l2 >> 8) & 255,(l2 >> 16) & 255,(l2 >> 24) & 255);
        for (b = 0; b < waveBytes;)
        {
            // This is a GC & speed trick: don't add one char at a time - batch up
            // larger partial strings
            x = "";
            for (k = 0; k < 256 && b < waveBytes; ++k, b += 2)
            {
                // Note: We amplify and clamp here
                y = 4 * (mixBuf[b] + (mixBuf[b+1] << 8) - 32768);
                y = y < -32768 ? -32768 : (y > 32767 ? 32767 : y);
                x += String.fromCharCode(y & 255, (y >> 8) & 255);
            }
            wave += x;
        }

        // Convert the string buffer to a base64 data uri
        s = "data:audio/wav;base64," + btoa(wave);
        wave = null;

        // Return the music as an audio element
        return new Audio(s);
    };
	
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////// Sampler manages all noises, creates them if necessary
////// it has a table of virtual synths
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Sampler() {
	
	
	this.defaultPatch = {
		osc1_oct: 8,
		osc1_det: 0,
		osc1_detune: 1,
		osc1_xenv: 0,
		osc1_vol: 216,
		osc1_waveform: 1,
		// Oscillator 2
		osc2_oct: 8,
		osc2_det: 0,
		osc2_detune: 11,
		osc2_xenv: 0,
		osc2_vol: 235,
		osc2_waveform: 1,
		// Noise oscillator
		noise_fader: 0,
		// Envelope
		env_attack: 789,
		env_sustain: 1000,
		env_release: 10259,
		env_master: 144,
		// Effects
		fx_filter: 9,
		fx_freq: 2000,
		fx_resonance: 116,
		fx_delay_time: 4,
		fx_delay_amt: 10,
		fx_pan_freq: 1,
		fx_pan_amt: 105,
		// LFO
		lfo_osc1_freq: 0,
		lfo_fx_freq: 1,
		lfo_freq: 3,
		lfo_amt: 158,
		lfo_waveform: 1,
		// misc
		sample_len: 300 //msec render length
	};
	
	// map of all notes
	this.noteMap = new Array();
	this.noteCount = 0;
	
	this.synthArray = new Array();
	
	this.createSynthHash = function(patch,n)  {

		var cs="";		
		for(var i in patch) {cs +=""+patch[i];}	
		var shaObj = new jsSHA(cs, "TEXT");
		var hash = "p"+shaObj.getHash("SHA-1", "HEX")+"n"+n;
		return hash;
	}
	
	this.clearAll = function() {
		
		for(key in this.noteMap) {
			console.log("deleted sample "+key);
			delete this.noteMap[key];
		}
		this.noteCount =0;
	}	
	
	this.clearSynth = function(patch) {
		
		var synthHash = this.createSynthHash(patch,0);
		synthHash=synthHash.slice(0,synthHash.length-2);
		
		console.log("clear synth "+synthHash);
		
		for(key in this.noteMap) {
			
			if (key.slice(0,synthHash.length) == synthHash) {
				console.log("deleted sample "+key);
				delete this.noteMap[key];
				this.noteCount--;
			}
		}
	}	
	
	// create synth (patch) if it doesnt exist, or return the one we have
	this.getSynth = function(synthIndex) {
	
		if (!(synthIndex in this.synthArray)) {
			console.log("created new synth index is "+synthIndex);
			this.synthArray[synthIndex] = jQuery.extend(true, {}, this.defaultPatch);
		}
		
		return this.synthArray[synthIndex];
	}

	this.setSynthParam = function(synthIndex,paramName,value) {
		
		var patch = this.getSynth(synthIndex);
		if (!(paramName in patch)) {
			console.log("no such param "+paramName+" in patch");
		} else {
			// delete all old samples for this synth
			console.log("set synth "+synthIndex+" param "+paramName+" to value "+value);
			this.clearSynth(patch);
			patch[paramName]=value;
		}
	}
	
	this.getSynthParam = function(synthIndex,paramName) {
		
		var patch = this.getSynth(synthIndex);
		var value = 0;
		
		if (!(paramName in patch)) {
			console.log("no such param ["+paramName+"] in patch");
		} else {
			value = patch[paramName];
			console.log("get synth "+synthIndex+" param "+paramName+" value is "+value);
		}
		
		return value;
	}
	
	// play a note on the specified (by index) synth
	this.playNoteOnSynth = function(synthIndex,n) {
		
		var patch = this.getSynth(synthIndex);
		this.playSample(patch,n);
	}
	
	// actually generate (if necessary) and play a sample, based on a patch and a note
	this.playSample = function(patch,n) {
	
		var hash = this.createSynthHash(patch,n);
				
		// get the sample from the map
		var note = this.noteMap[hash];

		// do we need to generate this sample?
		if (note == undefined) {
			
			// generate the note
			var samp = new NoteSynth(patch);
			samp.init();
			samp.generate(n);
			note = {"audio":samp.createAudio(),"hash":hash}; 
			
			// add it to the map
			this.noteMap[hash] = note;
			this.noteCount++;
					
			console.log("generated "+hash);
		}else {
			if (!note.audio.ended) {
				note.audio.pause();
				note.audio.currentTime = 0;
			}
		
			console.log("have "+hash);
		}
		
		note.audio.play();	
	};

};



/*
this.synthParams = {
		
		"groups" : [
		{
			"name" : "osc1",
			"params": [
				{"name": "osc1_oct", "min": 0, "max": 15},
				{"name": "osc1_det", "min": 0, "max": 0},		
				{"name": "osc1_detune", "min": -128, "max": 128},
				{"name": "osc1_xenv", "min": 0, "max": 15},
				{"name": "osc1_vol", "min": 0, "max": 255},
				{"name": "osc1_waveform", "min": 0, "max": 3}
			]
		},
		
		{
			"name" : "osc2",
			"params": [
				{"name": "osc2_oct", "min": 0, "max": 15},
				{"name": "osc2_det", "min": 0, "max": 0},		
				{"name": "osc2_detune", "min": -128, "max": 128},
				{"name": "osc2_xenv", "min": 0, "max": 15},
				{"name": "osc2_vol", "min": 0, "max": 255},
				{"name": "osc2_waveform", "min": 0, "max": 3}
			]
		},
		
		{
			"name" : "noise",
			"params": [
				{"name": "noise_fader", "min": 0, "max": 255}
			]
		},
		
		{
			"name" : "env",
			"params": [
				{"name": "env_attack", "min": 0, "max": 20000},
				{"name": "env_sustain", "min": 0, "max": 20000},
				{"name": "env_release", "min": 0, "max": 20000},
				{"name": "env_master", "min": 0, "max": 255}
			]
		},
		
		{
			"name" : "fx",
			"params": [        
				{"name": "fx_filter", "min": 1, "max": 4},
				{"name": "fx_freq", "min": 0, "max": 20000},
				{"name": "fx_resonance", "min": 0, "max": 255},
				{"name": "fx_delay_time", "min": 0, "max": 16},
				{"name": "fx_delay_amt", "min": 0, "max": 255},
				{"name": "fx_pan_freq", "min": 0, "max": 32},
				{"name": "fx_pan_amt", "min": 0, "max": 255}
			]
		},
		
		{
			"name" : "lfo",
			"params": [  
				{"name": "lfo_osc1_freq", "min": 0, "max": 255},
				{"name": "lfo_fx_freq", "min": 0, "max": 32}, 
				{"name": "lfo_freq", "min": 0, "max": 32},
				{"name": "lfo_amt", "min": 0, "max": 255},
				{"name": "lfo_waveform", "min": 0, "max": 3}
			]
		}]
	};

*/

var sampler = new Sampler();
// get value, set value, play note
// sampler.getSynthParam(synthIndex,paramName)
// sampler.setSynthParam(synthIndex,paramName,value)
// sampler.playNoteOnSynth(synthIndex,n)




