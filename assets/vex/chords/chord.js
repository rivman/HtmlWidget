/*
 * Vex Guitar Chord Chart Renderer.
 * Mohit Muthanna Cheppudira -- http://0xfe.blogspot.com
 *
 * Requires: Raphael JS (raphaeljs.com)
 */
Raphael.prototype.vexLine=function(t,i,s,h){return this.path("M"+t+" "+i+"L"+s+" "+h)},ChordBox=function(t,i,s,h,r){this.paper=t,this.x=i,this.y=s,this.width=h?h:100,this.height=r?r:100,this.num_strings=6,this.num_frets=5,this.spacing=this.width/this.num_strings,this.fret_spacing=this.height/(this.num_frets+2),this.x+=this.spacing/2,this.y+=this.fret_spacing,this.metrics={circle_radius:this.width/28,text_shift_x:this.width/29,text_shift_y:this.height/29,font_size:Math.ceil(this.width/9),bar_shift_x:this.width/28,bridge_stroke_width:Math.ceil(this.height/36),chord_fill:"#444"},this.position=0,this.position_text=0,this.chord=[],this.bars=[]},ChordBox.prototype.setNumFrets=function(t){return this.num_frets=t,this.fret_spacing=this.height/(this.num_frets+1),this},ChordBox.prototype.setChord=function(t,i,s,h,r){return this.chord=t,this.position=i||0,this.position_text=h||0,this.bars=s||[],this.tuning=r||["E","A","D","G","B","E"],r==[]&&(this.fret_spacing=this.height/(this.num_frets+1)),this},ChordBox.prototype.setPositionText=function(t){return this.position_text=t,this},ChordBox.prototype.draw=function(){var t=this.spacing,i=this.fret_spacing;this.position<=1?this.paper.vexLine(this.x,this.y-this.metrics.bridge_stroke_width/2,this.x+t*(this.num_strings-1),this.y-this.metrics.bridge_stroke_width/2).attr("stroke-width",this.metrics.bridge_stroke_width):this.paper.text(this.x-this.spacing/2-this.metrics.text_shift_x,this.y+this.fret_spacing/2+this.metrics.text_shift_y+this.fret_spacing*this.position_text,this.position).attr("font-size",this.metrics.font_size);for(var s=0;s<this.num_strings;++s)this.paper.vexLine(this.x+t*s,this.y,this.x+t*s,this.y+i*this.num_frets);for(var s=0;s<this.num_frets+1;++s)this.paper.vexLine(this.x,this.y+i*s,this.x+t*(this.num_strings-1),this.y+i*s);if(this.tuning!=[])for(var h=this.tuning,s=0;s<h.length;++s){var r=this.paper.text(this.x+this.spacing*s,this.y+(this.num_frets+1)*this.fret_spacing,h[s]);r.attr("font-size",this.metrics.font_size)}for(var s=0;s<this.chord.length;++s)this.lightUp(this.chord[s][0],this.chord[s][1]);for(var s=0;s<this.bars.length;++s)this.lightBar(this.bars[s].from_string,this.bars[s].to_string,this.bars[s].fret)},ChordBox.prototype.lightUp=function(t,i){t=this.num_strings-t;var s=0;1==this.position&&1==this.position_text&&(s=this.position_text);var h=!1;"x"==i?(i=0,h=!0):i-=s;var r=this.x+this.spacing*t,e=this.y+this.fret_spacing*i;if(0==i&&(e-=this.metrics.bridge_stroke_width),h)n=this.paper.text(r,e-(this.fret_spacing-this.metrics.font_size),"X").attr({"font-size":this.metrics.font_size});else{var n=this.paper.circle(r,e-Math.floor(this.fret_spacing/2),this.metrics.circle_radius);i>0&&n.attr("fill",this.metrics.chord_fill)}return this},ChordBox.prototype.lightBar=function(t,i,s){1==this.position&&1==this.position_text&&(s-=this.position_text),string_from_num=this.num_strings-t,string_to_num=this.num_strings-i;var h=this.x+this.spacing*string_from_num-this.metrics.bar_shift_x,r=this.x+this.spacing*string_to_num+this.metrics.bar_shift_x,e=this.y+this.fret_spacing*(s-1)+this.fret_spacing/4,n=this.y+this.fret_spacing*(s-1)+this.fret_spacing/4*3;return this.paper.rect(h,e,r-h,n-e,this.metrics.circle_radius).attr("fill",this.metrics.chord_fill),this};