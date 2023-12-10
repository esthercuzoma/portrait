let port,
  texty = "";
let opac = 0;
let state = 0;

let sparkles = [];

function preload() {
  port = loadImage("self portrait.jpg");
}

function setup() {
  createCanvas(815, 900);
  imageMode(CENTER);
  ellipseMode(CENTER);
  colorMode(HSB);
  //glasses = createVector(random(60, width-60),random(60, height-60));

  glasses = createVector(211, 753);
  
      for (var i = 0; i < 25; i++){
      sparkles.push(new spark())
    }
  
  
}

function draw() {
  if (state == 0) {
    drawingContext.filter = "blur(10px)";
  }

  noStroke();

  midx = width / 2;
  midy = height / 2;

  background(44, 55, 96);

  // image(port,midx, midy);
  port.resize(0, height);

  fill(0);

  opac = 0.3;

  body();
  head();
  deets();
  ink(1);
  lines();

  //orange
  fill(30, 93, 95);
  noStroke();
  rect(0, 0, 60, height);
  rect(width - 60, 0, 60, height);
  
  // blue
  fill(173, 28, 85);
  rect(0, 0, width, 60);
  rect(0, height - 60, width, 60);

  stroke(44, 55, 96);
  fill(30,95,92, 0.65);

  

  star(glasses.x, glasses.y, 75,150,10);

  strokeWeight(1.5);
  // text(texty, 10, 20, 100);

  drawingContext.filter = "blur(10px)";

  if (state == 1) {
    drawingContext.filter = "blur(0px)";
    stroke(233, 31, 50);

    fill(173, 28, 85, 0.35);
    circle(327, 327, 80);
    circle(451, 310, 90);

    noFill();
    strokeWeight(7);

    beginShape();
    curveVertex(365, 318);
    curveVertex(365, 318);
    curveVertex(372, 314);
    curveVertex(396, 311);

    curveVertex(408, 313);
    curveVertex(408, 313);
    endShape();
    
    for (var i = sparkles.length-1; i >= 0; i--){
      sparkles[i].update();
      sparkles[i].show();
    }
  }
}

function mouseClicked() {
  diff = mouseX - glasses.x;
  diffy = mouseY - glasses.y;

  if (abs(diff) < 50 && abs(diffy) < 50) {
    state = 1;
  }

  texty = mouseX + "," + mouseY;
  console.log("curveVertex(" + texty + ");");
}

function name() {
  //title
  beginShape();

  endShape(CLOSE);

  //title
  beginShape();

  endShape(CLOSE);

  //title
  beginShape();

  endShape(CLOSE);

  //title
  beginShape();

  endShape(CLOSE);

  //title
  beginShape();

  endShape(CLOSE);

  //title
  beginShape();

  endShape(CLOSE);
}

function head() {
  noStroke();

  fill(0);
  //pony shadow
  beginShape();
  curveVertex(473, 144);
  curveVertex(447, 122);
  curveVertex(420, 113);
  curveVertex(397, 119);
  curveVertex(379, 141);
  curveVertex(361, 135);
  curveVertex(346, 131);
  curveVertex(326, 131);
  curveVertex(303, 146);
  curveVertex(287, 171);
  curveVertex(292, 212);
  curveVertex(353, 186);
  endShape(CLOSE);

  fill(23, 65, 37);
  //head
  beginShape();
  curveVertex(350, 153);
  curveVertex(313, 177);
  curveVertex(281, 218);
  curveVertex(277, 263);
  curveVertex(283, 303);
  curveVertex(297, 336);
  curveVertex(306, 373);
  curveVertex(321, 406);
  curveVertex(345, 431);
  curveVertex(360, 443);
  curveVertex(384, 466);

  curveVertex(430, 472);
  curveVertex(458, 453);
  curveVertex(491, 417);
  curveVertex(507, 396);
  curveVertex(514, 340);
  curveVertex(516, 262);
  curveVertex(492, 181);
  curveVertex(446, 151);
  curveVertex(392, 145);
  endShape(CLOSE);

  fill(22, 82, 15);
  //brow r
  beginShape();

  curveVertex(422, 250);
  curveVertex(473, 243);
  curveVertex(489, 258);
  curveVertex(473, 253);
  curveVertex(439, 261);
  curveVertex(414, 266);
  endShape(CLOSE);

  //brow l
  beginShape();
  curveVertex(335, 263);
  curveVertex(347, 276);
  curveVertex(311, 278);
  curveVertex(292, 290);
  curveVertex(303, 269);
  curveVertex(313, 264);
  curveVertex(334, 264);
  endShape(CLOSE);

  //side part r
  beginShape();
  curveVertex(379, 142);
  curveVertex(378, 139);
  curveVertex(373, 156);
  curveVertex(354, 153);
  curveVertex(378, 141);
  curveVertex(370, 167);
  curveVertex(382, 173);
  curveVertex(476, 211);
  curveVertex(513, 269);
  curveVertex(512, 346);
  curveVertex(512, 383);
  curveVertex(517, 412);
  curveVertex(586, 436);
  curveVertex(615, 441);
  curveVertex(606, 411);
  curveVertex(601, 369);
  curveVertex(592, 325);
  curveVertex(572, 238);
  curveVertex(548, 191);
  curveVertex(462, 140);
  curveVertex(398, 137);
  curveVertex(378, 140);
  endShape(CLOSE);

  //side part l
  beginShape();
  curveVertex(375, 142);

  curveVertex(368, 163);

  curveVertex(371, 162);
  curveVertex(357, 169);
  curveVertex(307, 195);
  curveVertex(285, 228);
  curveVertex(280, 271);
  curveVertex(280, 288);
  curveVertex(274, 249);
  curveVertex(279, 215);
  curveVertex(298, 191);
  curveVertex(323, 167);
  curveVertex(349, 150);
  curveVertex(374, 142);
  curveVertex(376, 142);
  endShape(CLOSE);

  fill(23, 65, 37);

  //ear
  beginShape();
  curveVertex(517, 275);
  curveVertex(528, 266);
  curveVertex(538, 271);
  curveVertex(550, 280);
  curveVertex(551, 297);
  curveVertex(551, 328);
  curveVertex(544, 355);
  curveVertex(536, 364);
  curveVertex(523, 373);
  curveVertex(510, 375);
  curveVertex(504, 375);
  endShape(CLOSE);

  fill(22, 82, 15);
  //ear line
  beginShape();
  curveVertex(517, 323);
  curveVertex(525, 302);
  curveVertex(532, 289);
  curveVertex(534, 285);
  curveVertex(542, 289);
  curveVertex(551, 298);
  curveVertex(544, 285);
  curveVertex(536, 281);
  curveVertex(527, 285);
  curveVertex(523, 295);
  curveVertex(517, 314);
  endShape(CLOSE);

  fill(30, 93, 100);
  ellipse(535, 357, 9, 10);

  //title
  beginShape();

  endShape(CLOSE);

  //title
  beginShape();

  endShape(CLOSE);

  fill(0);

  //twist r
  beginShape();
  curveVertex(367, 167);
  curveVertex(369, 176);
  curveVertex(370, 186);
  curveVertex(370, 188);
  curveVertex(384, 191);
  curveVertex(409, 198);
  curveVertex(433, 207);
  curveVertex(457, 222);
  curveVertex(476, 239);
  curveVertex(490, 256);
  curveVertex(499, 291);
  curveVertex(504, 334);
  curveVertex(504, 367);
  curveVertex(502, 400);
  curveVertex(505, 439);
  curveVertex(510, 467);
  curveVertex(518, 482);
  curveVertex(529, 487);
  curveVertex(538, 483);
  curveVertex(538, 471);
  curveVertex(534, 448);
  curveVertex(525, 414);
  curveVertex(525, 383);
  curveVertex(525, 354);
  curveVertex(522, 320);
  curveVertex(517, 279);
  curveVertex(509, 250);
  curveVertex(490, 224);
  curveVertex(461, 199);
  curveVertex(421, 182);
  curveVertex(392, 176);
  curveVertex(374, 169);
  endShape(CLOSE);
}

function ink(t) {
  fill(0, 0, 0, t);
  //lash l
  beginShape();
  curveVertex(360, 327);
  curveVertex(355, 328);
  curveVertex(351, 323);
  curveVertex(349, 320);
  curveVertex(344, 315);
  curveVertex(339, 312);
  curveVertex(331, 310);
  curveVertex(323, 311);
  curveVertex(322, 311);
  curveVertex(317, 313);
  curveVertex(312, 316);
  curveVertex(308, 320);
  curveVertex(305, 322);
  curveVertex(301, 322);
  curveVertex(299, 321);
  curveVertex(298, 319);
  curveVertex(301, 318);
  curveVertex(303, 318);
  curveVertex(305, 318);
  curveVertex(308, 316);
  curveVertex(313, 311);
  curveVertex(320, 308);
  curveVertex(326, 306);
  curveVertex(335, 306);
  curveVertex(342, 308);
  curveVertex(348, 313);
  curveVertex(353, 318);
  endShape(CLOSE);

  //lash r
  beginShape();

  curveVertex(421, 309);
  curveVertex(425, 298);
  curveVertex(430, 291);
  curveVertex(436, 285);
  curveVertex(442, 282);
  curveVertex(449, 280);
  curveVertex(458, 278);
  curveVertex(467, 280);
  curveVertex(475, 283);
  curveVertex(482, 286);
  curveVertex(486, 285);
  curveVertex(489, 285);
  curveVertex(492, 288);
  curveVertex(491, 291);
  curveVertex(487, 292);
  curveVertex(485, 292);
  curveVertex(480, 290);
  curveVertex(476, 288);
  curveVertex(469, 285);
  curveVertex(463, 284);
  curveVertex(458, 284);
  curveVertex(447, 287);
  curveVertex(436, 293);
  curveVertex(429, 299);
  curveVertex(426, 305);
  curveVertex(424, 315);
  curveVertex(424, 316);
  curveVertex(420, 317);
  curveVertex(421, 310);
  curveVertex(424, 301);
  curveVertex(428, 293);
  endShape(CLOSE);

  //nose bridge
  beginShape();
  curveVertex(349, 265);
  curveVertex(361, 276);
  curveVertex(373, 292);
  curveVertex(375, 297);
  curveVertex(375, 305);
  curveVertex(375, 317);
  curveVertex(376, 327);
  curveVertex(380, 340);
  curveVertex(375, 334);
  curveVertex(372, 325);
  curveVertex(371, 313);
  curveVertex(372, 302);
  curveVertex(372, 296);
  curveVertex(365, 284);
  curveVertex(345, 265);
  endShape(CLOSE);

  //nose l
  beginShape();
  curveVertex(369, 367);
  curveVertex(366, 373);
  curveVertex(369, 381);
  curveVertex(374, 385);
  curveVertex(371, 380);
  curveVertex(370, 374);
  curveVertex(372, 367);
  endShape(CLOSE);

  //nose r
  beginShape();
  curveVertex(420, 356);
  curveVertex(426, 363);
  curveVertex(429, 367);
  curveVertex(429, 373);
  curveVertex(428, 377);
  curveVertex(422, 380);
  curveVertex(428, 379);
  curveVertex(431, 376);
  curveVertex(433, 369);
  curveVertex(431, 362);
  curveVertex(423, 356);
  curveVertex(422, 355);
  endShape(CLOSE);

  //nostril l
  beginShape();
  curveVertex(375, 381);
  curveVertex(375, 383);
  curveVertex(377, 383);
  curveVertex(380, 382);
  curveVertex(383, 383);
  curveVertex(384, 384);
  curveVertex(383, 382);
  curveVertex(380, 381);
  curveVertex(378, 381);
  curveVertex(375, 381);
  endShape(CLOSE);

  //nostril r
  beginShape();
  curveVertex(420, 378);
  curveVertex(416, 378);
  curveVertex(410, 379);
  curveVertex(408, 380);
  curveVertex(406, 382);
  curveVertex(406, 383);
  curveVertex(403, 382);
  curveVertex(403, 379);
  curveVertex(406, 377);
  curveVertex(410, 377);
  curveVertex(414, 377);
  curveVertex(419, 377);
  endShape(CLOSE);

  //eye l
  beginShape();
  curveVertex(338, 310);
  curveVertex(339, 325);
  curveVertex(333, 335);
  curveVertex(321, 340);
  curveVertex(310, 330);
  curveVertex(307, 321);
  curveVertex(306, 320);
  curveVertex(313, 314);
  curveVertex(316, 322);
  curveVertex(322, 331);
  curveVertex(328, 330);
  curveVertex(331, 322);
  curveVertex(332, 312);
  curveVertex(332, 306);
  curveVertex(335, 308);
  endShape(CLOSE);

  //eye r
  beginShape();
  curveVertex(452, 283);
  curveVertex(456, 298);
  curveVertex(449, 317);
  curveVertex(438, 321);
  curveVertex(429, 318);
  curveVertex(424, 312);
  curveVertex(424, 303);
  curveVertex(430, 311);
  curveVertex(441, 312);
  curveVertex(446, 306);
  curveVertex(445, 295);
  curveVertex(443, 290);
  curveVertex(441, 287);
  curveVertex(446, 283);
  endShape(CLOSE);

  // lip line
  beginShape();
  curveVertex(371, 427);
  curveVertex(367, 430);
  curveVertex(361, 428);
  curveVertex(363, 426);
  curveVertex(369, 427);
  curveVertex(371, 423);
  curveVertex(376, 418);
  curveVertex(383, 413);
  curveVertex(390, 411);
  curveVertex(399, 410);
  curveVertex(409, 411);
  curveVertex(418, 416);
  curveVertex(425, 420);
  curveVertex(427, 421);
  curveVertex(431, 418);
  curveVertex(437, 417);
  curveVertex(440, 420);
  curveVertex(436, 424);
  curveVertex(429, 425);
  curveVertex(421, 422);
  curveVertex(413, 417);
  curveVertex(405, 414);
  curveVertex(396, 414);
  curveVertex(388, 414);
  curveVertex(381, 417);
  curveVertex(376, 423);
  curveVertex(370, 429);
  curveVertex(367, 429);
  endShape(CLOSE);

  //title
  beginShape();

  endShape(CLOSE);

  //title
  beginShape();

  endShape(CLOSE);
}

function deets() {
  //
  beginShape();

  endShape(CLOSE);

  fill(22, 82, 15);

  // mouth
  beginShape();
  curveVertex(389, 408);
  curveVertex(412, 409);
  curveVertex(421, 416);
  curveVertex(407, 423);
  curveVertex(414, 414);
  curveVertex(435, 426);
  curveVertex(398, 451);
  curveVertex(372, 434);
  curveVertex(370, 423);

  endShape(CLOSE);

  fill(11, 65, 62);

  // tongue
  beginShape();

  curveVertex(402, 411);
  curveVertex(383, 431);
  curveVertex(391, 441);
  curveVertex(406, 450);
  curveVertex(430, 433);
  curveVertex(430, 424);
  curveVertex(406, 410);

  endShape(CLOSE);

  fill(157, 3, 99);

  // tooth b
  beginShape();

  curveVertex(382, 432);
  curveVertex(384, 436);

  curveVertex(398, 440);
  curveVertex(414, 439);
  curveVertex(417, 444);
  curveVertex(387, 445);
  curveVertex(382, 438);
  curveVertex(382, 434);
  endShape(CLOSE);

  // tooth r
  beginShape();
  curveVertex(399, 410);
  curveVertex(399, 422);
  curveVertex(413, 423);
  curveVertex(419, 419);
  curveVertex(417, 412);
  curveVertex(407, 410);
  endShape(CLOSE);

  //tooth l
  beginShape();
  curveVertex(395, 412);
  curveVertex(395, 422);

  curveVertex(378, 422);
  curveVertex(382, 415);
  curveVertex(392, 413);
  endShape(CLOSE);

  // eye r
  beginShape();
  curveVertex(481, 289);
  curveVertex(482, 305);
  curveVertex(476, 321);
  curveVertex(463, 329);
  curveVertex(438, 329);
  curveVertex(425, 323);
  curveVertex(422, 315);
  curveVertex(424, 305);
  curveVertex(434, 290);
  curveVertex(453, 283);
  curveVertex(476, 286);
  curveVertex(481, 289);
  endShape(CLOSE);

  // eye
  beginShape();
  curveVertex(356, 326);
  curveVertex(354, 338);
  curveVertex(341, 348);
  curveVertex(327, 348);
  curveVertex(311, 339);
  curveVertex(306, 325);
  curveVertex(306, 321);
  curveVertex(318, 311);
  curveVertex(330, 307);
  curveVertex(342, 310);
  curveVertex(355, 324);
  curveVertex(355, 326);
  curveVertex(347, 344);
  curveVertex(327, 349);
  curveVertex(313, 341);
  curveVertex(306, 320);
  curveVertex(320, 310);
  curveVertex(330, 308);
  curveVertex(342, 312);
  curveVertex(355, 324);
  endShape(CLOSE);

  fill(22, 82, 25);

  //lip
  beginShape();
  curveVertex(368, 428);
  curveVertex(367, 413);
  curveVertex(373, 401);
  curveVertex(395, 397);
  curveVertex(408, 400);
  curveVertex(428, 414);
  curveVertex(431, 422);
  curveVertex(427, 423);
  curveVertex(408, 413);
  curveVertex(392, 413);
  curveVertex(377, 418);
  curveVertex(371, 427);
  endShape(CLOSE);

  fill(22, 82, 28);
  //nose shadow
  beginShape();
  curveVertex(370, 375);
  curveVertex(378, 382);
  curveVertex(375, 381);
  curveVertex(392, 382);
  curveVertex(401, 380);
  curveVertex(407, 377);
  curveVertex(417, 377);
  curveVertex(422, 375);
  curveVertex(426, 372);
  curveVertex(430, 369);
  curveVertex(430, 377);
  curveVertex(424, 380);
  curveVertex(411, 384);
  curveVertex(404, 385);
  curveVertex(393, 388);
  curveVertex(372, 384);
  endShape(CLOSE);

  fill(355, 53, 49);

  //bottom lip
  beginShape();
  curveVertex(436, 423);
  curveVertex(433, 437);
  curveVertex(421, 452);
  curveVertex(405, 455);
  curveVertex(386, 453);
  curveVertex(373, 440);
  curveVertex(367, 431);
  curveVertex(369, 428);
  curveVertex(381, 436);
  curveVertex(406, 442);
  curveVertex(425, 430);
  curveVertex(432, 425);
  endShape(CLOSE);

  //title
  beginShape();

  endShape(CLOSE);

  //title
  beginShape();

  endShape(CLOSE);
}

function lines() {
  noFill();
  stroke(19, 92, 22);
  strokeWeight(1.5);

  // lid l
  beginShape();
  curveVertex(415, 300);
  curveVertex(426, 280);
  curveVertex(444, 271);
  curveVertex(468, 274);
  curveVertex(474, 278);
  endShape();

  // lid r
  beginShape();
  curveVertex(304, 306);
  curveVertex(317, 293);
  curveVertex(338, 292);
  curveVertex(354, 302);
  curveVertex(358, 312);
  endShape();

  // strokeWeight(1);

  //brow line r
  beginShape();
  curveVertex(415, 252);
  curveVertex(415, 252);
  curveVertex(407, 265);
  curveVertex(407, 265);
  endShape(CLOSE);

  //brow line l
  beginShape();
  curveVertex(339, 263);
  curveVertex(339, 263);
  curveVertex(351, 275);
  curveVertex(351, 275);
  endShape();

  //brow r
  beginShape();
  curveVertex(421, 251);
  curveVertex(421, 251);
  curveVertex(412, 266);
  curveVertex(412, 266);
  endShape();

  //title
  beginShape();
  curveVertex(341, 265);
  curveVertex(341, 265);
  curveVertex(350, 275);
  curveVertex(350, 275);
  endShape();

  //title
  beginShape();
  curveVertex(401, 267);
  curveVertex(401, 267);
  curveVertex(409, 253);
  curveVertex(409, 253);
  endShape();

  stroke(173, 28, 40);
  //shirt line 2
  beginShape();
  curveVertex(527, 424);
  curveVertex(527, 424);
  curveVertex(550, 430);
  curveVertex(574, 435);
  curveVertex(601, 441);
  curveVertex(618, 447);
  curveVertex(618, 447);
  endShape();

  //shirt line
  beginShape();
  curveVertex(364, 448);
  curveVertex(364, 448);
  curveVertex(328, 455);
  curveVertex(298, 466);
  curveVertex(265, 472);
  curveVertex(242, 482);
  curveVertex(242, 482);
  endShape();

  stroke(19, 92, 22);
  //twist r
  beginShape();
  curveVertex(369, 182);
  curveVertex(369, 182);
  curveVertex(381, 183);
  curveVertex(390, 183);
  curveVertex(400, 181);
  curveVertex(402, 179);
  curveVertex(402, 179);
  endShape();

  //twist r
  beginShape();
  curveVertex(392, 193);
  curveVertex(392, 193);
  curveVertex(416, 192);
  curveVertex(431, 186);
  curveVertex(431, 186);
  endShape();

  //twist r
  beginShape();
  curveVertex(421, 202);
  curveVertex(421, 202);
  curveVertex(440, 201);
  curveVertex(453, 199);
  curveVertex(457, 198);
  curveVertex(457, 198);
  endShape();

  //twist r
  beginShape();
  curveVertex(455, 220);
  curveVertex(455, 220);
  curveVertex(474, 218);
  curveVertex(483, 218);
  curveVertex(483, 218);
  endShape();

  //twist r
  beginShape();
  curveVertex(478, 241);
  curveVertex(478, 241);
  curveVertex(495, 247);
  curveVertex(505, 246);
  curveVertex(505, 246);
  endShape();

  //twist r
  beginShape();
  curveVertex(492, 261);
  curveVertex(492, 261);
  curveVertex(508, 281);
  curveVertex(517, 302);
  curveVertex(517, 302);
  endShape();

  //twist r
  beginShape();
  curveVertex(500, 297);
  curveVertex(500, 297);
  curveVertex(514, 320);
  curveVertex(523, 340);
  curveVertex(523, 340);
  endShape();

  //twist r
  beginShape();
  curveVertex(504, 358);
  curveVertex(504, 358);
  curveVertex(513, 382);
  curveVertex(522, 395);
  curveVertex(523, 399);
  curveVertex(523, 399);
  endShape();

  //twist r
  beginShape();
  curveVertex(501, 396);
  curveVertex(501, 396);
  curveVertex(510, 409);
  curveVertex(524, 425);
  curveVertex(530, 432);
  curveVertex(530, 432);
  endShape();

  //twist r
  beginShape();
  curveVertex(505, 428);
  curveVertex(505, 428);
  curveVertex(512, 442);
  curveVertex(529, 455);
  curveVertex(537, 461);
  curveVertex(537, 461);
  endShape();

  //twist r
  beginShape();
  curveVertex(503, 335);
  curveVertex(503, 335);
  curveVertex(515, 349);
  curveVertex(523, 367);
  curveVertex(523, 367);
  endShape();

  //title
  beginShape();
  curveVertex(392, 119);
  curveVertex(392, 119);
  curveVertex(403, 93);
  curveVertex(415, 86);
  curveVertex(435, 85);
  curveVertex(435, 85);
  endShape();

  //hair line
  beginShape();
  curveVertex(364, 121);
  curveVertex(364, 121);
  curveVertex(339, 109);
  curveVertex(303, 126);
  curveVertex(275, 169);
  curveVertex(263, 204);
  curveVertex(257, 239);
  curveVertex(247, 290);
  curveVertex(237, 336);
  curveVertex(244, 387);
  curveVertex(261, 411);
  curveVertex(269, 418);
  curveVertex(269, 418);
  endShape();

  //hair line
  beginShape();
  curveVertex(372, 118);
  curveVertex(372, 118);
  curveVertex(368, 97);
  curveVertex(367, 86);
  curveVertex(367, 86);
  endShape();

  //hair line
  beginShape();
  curveVertex(370, 159);
  curveVertex(370, 159);
  curveVertex(427, 166);
  curveVertex(505, 203);
  curveVertex(551, 266);
  curveVertex(563, 325);
  curveVertex(563, 363);
  curveVertex(562, 379);
  curveVertex(566, 394);
  curveVertex(567, 402);
  curveVertex(567, 402);
  endShape();

  //skirt line
  beginShape();
  curveVertex(465, 665);
  curveVertex(448, 665);

  curveVertex(457, 726);
  curveVertex(460, 758);
  curveVertex(464, 804);
  curveVertex(465, 829);
  curveVertex(465, 829);
  endShape();

  //bottom skirt
  beginShape();
  curveVertex(558, 818);
  curveVertex(558, 818);
  curveVertex(480, 827);
  curveVertex(449, 828);
  curveVertex(413, 828);
  curveVertex(413, 828);
  endShape();

  //title
  beginShape();
  curveVertex(504, 652);
  curveVertex(504, 652);
  curveVertex(515, 676);
  curveVertex(539, 695);
  curveVertex(563, 708);
  curveVertex(570, 709);
  curveVertex(570, 709);
  endShape();

  //title
  beginShape();
  curveVertex(376, 149);
  curveVertex(376, 149);
  curveVertex(431, 149);
  curveVertex(494, 171);
  curveVertex(538, 211);
  curveVertex(570, 280);
  curveVertex(581, 326);
  curveVertex(585, 368);
  curveVertex(587, 403);
  curveVertex(587, 403);
  endShape();

  //hair line
  beginShape();
  curveVertex(397, 121);
  curveVertex(397, 121);
  curveVertex(412, 107);
  curveVertex(437, 104);
  curveVertex(457, 114);
  curveVertex(472, 131);
  curveVertex(478, 141);
  curveVertex(480, 148);
  curveVertex(480, 148);
  endShape();

  //hair line
  beginShape();
  curveVertex(367, 155);
  curveVertex(367, 155);
  curveVertex(339, 166);
  curveVertex(316, 180);
  curveVertex(291, 200);
  curveVertex(276, 219);
  curveVertex(267, 251);
  curveVertex(267, 251);
  endShape();

  stroke(19, 92, 30, 0.3);
  strokeWeight(4);
  //palm
  beginShape();
  curveVertex(269, 649);
  curveVertex(269, 649);
  curveVertex(225, 651);
  curveVertex(193, 655);
  curveVertex(163, 667);
  curveVertex(146, 674);
  curveVertex(122, 689);
  curveVertex(114, 701);
  curveVertex(108, 706);
  curveVertex(98, 724);
  curveVertex(86, 748);
  curveVertex(86, 748);
  endShape();

  noStroke();
  fill(30, 93, 100);
  //scrunchie
  beginShape();
  curveVertex(402, 138);
  curveVertex(398, 133);
  curveVertex(402, 128);
  curveVertex(399, 120);
  curveVertex(372, 118);
  curveVertex(352, 129);
  curveVertex(346, 136);
  curveVertex(350, 143);
  curveVertex(352, 149);
  curveVertex(378, 142);
  curveVertex(397, 138);
  endShape(CLOSE);

  //title
  beginShape();

  endShape();

  //title
  beginShape();

  endShape();

  //title
  beginShape();

  endShape();

  //title
  beginShape();

  endShape();
  noFill();
  stroke(33, 30, 60);
  strokeWeight(5);

  //hand line 1
  beginShape();
  curveVertex(101, 496);
  curveVertex(101, 496);
  curveVertex(125, 529);
  curveVertex(162, 589);

  curveVertex(204, 652);
  curveVertex(204, 652);
  endShape();

  //hand line 2
  beginShape();
  curveVertex(59, 526);
  curveVertex(59, 526);
  curveVertex(86, 572);
  curveVertex(120, 627);
  curveVertex(143, 665);
  curveVertex(147, 674);
  curveVertex(147, 674);
  endShape();

  //hand line 3
  beginShape();
  curveVertex(59, 626);
  curveVertex(59, 626);
  curveVertex(81, 656);

  curveVertex(111, 703);
  curveVertex(111, 703);
  endShape();

  fill(0);
  noStroke();
  //twist l
  beginShape();
  curveVertex(366, 170);

  curveVertex(359, 187);
  curveVertex(341, 192);
  curveVertex(316, 205);
  curveVertex(299, 224);
  curveVertex(289, 247);
  curveVertex(282, 269);
  curveVertex(281, 296);
  curveVertex(286, 325);
  curveVertex(293, 360);
  curveVertex(294, 391);
  curveVertex(296, 421);
  curveVertex(294, 456);

  curveVertex(294, 459);
  curveVertex(284, 479);
  curveVertex(268, 480);

  curveVertex(265, 461);
  curveVertex(270, 432);
  curveVertex(272, 401);
  curveVertex(269, 366);
  curveVertex(265, 330);
  curveVertex(263, 289);
  curveVertex(265, 260);
  curveVertex(277, 225);
  curveVertex(295, 200);
  curveVertex(326, 179);
  curveVertex(354, 168);
  curveVertex(363, 166);
  endShape(CLOSE);
}

function body() {
  fill(22, 82, 15);
  //ponytail
  beginShape();
  curveVertex(509, 187);
  curveVertex(503, 159);
  curveVertex(499, 150);
  curveVertex(480, 120);
  curveVertex(456, 96);
  curveVertex(423, 81);
  curveVertex(386, 82);
  curveVertex(346, 89);
  curveVertex(310, 101);
  curveVertex(283, 112);
  curveVertex(270, 136);
  curveVertex(261, 172);
  curveVertex(252, 217);
  curveVertex(242, 257);
  curveVertex(228, 305);
  curveVertex(219, 350);
  curveVertex(218, 384);
  curveVertex(226, 406);
  curveVertex(240, 426);
  curveVertex(253, 437);
  curveVertex(272, 452);
  curveVertex(375, 455);
  curveVertex(517, 461);
  curveVertex(556, 448);
  endShape(CLOSE);

  //back of hair
  fill(0);
  beginShape();
  curveVertex(343, 155);
  curveVertex(315, 165);
  curveVertex(293, 184);
  curveVertex(275, 224);
  curveVertex(272, 273);
  curveVertex(277, 352);
  curveVertex(284, 413);
  curveVertex(284, 431);
  curveVertex(332, 433);
  curveVertex(484, 424);
  curveVertex(569, 422);
  curveVertex(553, 347);
  curveVertex(518, 231);
  curveVertex(377, 156);
  curveVertex(306, 193);
  endShape(CLOSE);

  fill(173, 28, 40);

  //skirt
  beginShape();
  curveVertex(348, 647);
  curveVertex(506, 639);
  curveVertex(547, 631);
  curveVertex(570, 694);
  curveVertex(567, 750);
  curveVertex(558, 816);
  curveVertex(600, 851);
  curveVertex(464, 860);
  curveVertex(367, 845);
  curveVertex(306, 861);
  curveVertex(347, 765);

  curveVertex(337, 703);

  curveVertex(344, 647);
  curveVertex(399, 648);
  curveVertex(474, 660);
  endShape(CLOSE);

  fill(23, 65, 30);
  //arm
  beginShape();
  curveVertex(412, 398);
  curveVertex(487, 411);
  curveVertex(584, 422);
  curveVertex(622, 438);
  curveVertex(662, 469);
  curveVertex(659, 515);
  curveVertex(583, 565);
  curveVertex(529, 586);
  curveVertex(330, 590);
  curveVertex(313, 604);
  curveVertex(309, 605);
  curveVertex(294, 611);
  curveVertex(278, 657);
  curveVertex(254, 674);
  curveVertex(191, 590);
  curveVertex(185, 572);
  curveVertex(202, 539);
  curveVertex(204, 499);
  curveVertex(236, 471);
  curveVertex(285, 467);
  curveVertex(325, 438);
  curveVertex(402, 387);
  curveVertex(489, 398);
  curveVertex(533, 415);
  curveVertex(577, 426);
  endShape(CLOSE);

  fill(23, 65, 22);
  //neck shadow
  beginShape();
  curveVertex(418, 421);
  curveVertex(406, 451);
  curveVertex(420, 473);
  curveVertex(449, 489);
  curveVertex(487, 478);
  curveVertex(523, 423);
  curveVertex(525, 402);
  curveVertex(493, 383);
  curveVertex(432, 431);
  endShape(CLOSE);

  strokeWeight(3);
  stroke(130, 29, 80);
  fill(130, 29, 90);
  //shirt
  beginShape();
  curveVertex(382, 409);
  curveVertex(366, 472);
  curveVertex(440, 523);
  curveVertex(460, 507);
  curveVertex(481, 483);
  curveVertex(501, 446);
  curveVertex(511, 419);
  curveVertex(521, 393);
  curveVertex(594, 408);
  curveVertex(619, 429);
  curveVertex(617, 452);
  curveVertex(588, 544);
  curveVertex(580, 582);
  curveVertex(569, 621);
  curveVertex(561, 633);
  curveVertex(536, 641);
  curveVertex(462, 660);
  curveVertex(415, 659);
  curveVertex(363, 659);
  curveVertex(341, 651);
  curveVertex(325, 641);
  curveVertex(310, 612);
  curveVertex(288, 570);
  curveVertex(257, 509);
  curveVertex(247, 484);
  curveVertex(239, 471);
  curveVertex(229, 476);
  curveVertex(233, 461);
  curveVertex(237, 449);
  curveVertex(294, 426);
  curveVertex(332, 413);
  curveVertex(447, 397);
  endShape(CLOSE);

  noFill();
  stroke(19, 92, 22);
  strokeWeight(2);

  noStroke();
  //title
  beginShape();

  endShape(CLOSE);

  //title
  beginShape();

  endShape(CLOSE);

  stroke(23, 65, 20);
  strokeWeight(9);
  fill(33, 30, 87);

  //hand
  beginShape();
  curveVertex(90, 477);
  curveVertex(86, 455);
  curveVertex(87, 447);
  curveVertex(99, 434);
  curveVertex(125, 446);
  curveVertex(163, 492);
  curveVertex(206, 551);
  curveVertex(243, 605);
  curveVertex(270, 647);
  curveVertex(284, 673);
  curveVertex(312, 714);
  curveVertex(328, 740);
  curveVertex(336, 753);
  curveVertex(348, 762);
  curveVertex(359, 746);
  curveVertex(364, 734);
  curveVertex(361, 717);
  curveVertex(362, 688);
  curveVertex(374, 665);
  curveVertex(387, 650);
  curveVertex(398, 645);
  curveVertex(418, 648);
  curveVertex(430, 656);
  curveVertex(433, 672);
  curveVertex(423, 700);
  curveVertex(417, 732);
  curveVertex(413, 779);
  curveVertex(414, 813);
  curveVertex(413, 828);
  curveVertex(404, 843);
  curveVertex(400, 852);
  curveVertex(163, 859);
  curveVertex(154, 849);
  curveVertex(123, 807);
  curveVertex(99, 781);
  curveVertex(89, 762);
  curveVertex(86, 747);
  curveVertex(73, 727);
  curveVertex(54, 702);
  curveVertex(53, 595);
  curveVertex(51, 529);
  curveVertex(49, 456);
  curveVertex(54, 441);
  curveVertex(61, 445);
  curveVertex(72, 456);

  curveVertex(86, 472);

  curveVertex(99, 491);

  endShape(CLOSE);
}

class spark {
  constructor() {
    this.pos = createVector(glasses.x, glasses.y);
    this.vel = p5.Vector.random2D().normalize().mult(random(5,10));
  }

  update() {
    this.pos.add(this.vel);
  }

  show() {
    stroke(30, 93, 93);
    strokeWeight(4)
    fill(255,0.5);
    
    push()
    translate(this.pos.x,this.pos.y)
    rotate(frameCount/10)
    star(0,0,7,15,10);
    pop()
    
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}