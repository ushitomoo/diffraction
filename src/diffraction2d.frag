precision highp float;

uniform vec2 uResolution;
uniform float u_time;
uniform float N;

out vec4 fragColor;

//#define N 30.0 
void main(){
  //float N=13.0;//Nは定数。穴の個数。
  vec2 p = gl_FragCoord.xy / uResolution.x;
  float mag = 100.0;
  p *= 2.0*mag;
  p -= vec2(mag,mag*uResolution.y/uResolution.x);
  //float N = 18.0;
  float R = 100.0;
  float PI = 3.14159;
  float intensity = N;
  float maximum = N;
  float x[100];
  float y[100];
  for(int i=0;float(i)<N;i++){
    x[i]=cos(float(i)*2.0*PI/N);//配列にN個のx座標を入れる
    y[i]=sin(float(i)*2.0*PI/N);//配列にN個のy座標を入れる
  }

  /*for(int i=-1;i<=1;i++){
    for(int j=-1;j<=1;j++){
      x[(i+1)*3+(j+1)]=float(i);//xとyの配列を点の数分作って、float(i)とfloat(j)が座標になっている
      y[(i+1)*3+(j+1)]=float(j);//上記と一緒
    }
  }
  x[9]=2.0;
  y[9]=0.0;
  x[10]=0.0;
  y[10]=2.0;
  x[11]=-2.0;
  y[11]=0.0;
  x[12]=0.0;
  y[12]=-2.0;*/

  
  for (int i = 1; float(i)<N; i++){
    for (int j = 0; j<i; j++){
      float dx = x[i] - x[j];//円周上に点を取った時、i番目とj番目の点のx座標の距離
      float dy = y[i] - y[j];//円周上に点を取った時、i番目とj番目の点のy座標の距離
      intensity += 2.0*cos(100.0*(dx*p.x + dy*p.y)/sqrt(p.x*p.x+p.y*p.y+R*R));//明るさ
      maximum += 2.0;
    }
  }
  fragColor=vec4(0,6.0*intensity/maximum,0,1);
  
  //if (p.x > 100000.0){
  //  fragColor=vec4(0,1,0,1);
  //}else{
  //  fragColor=vec4(1,0,0,1);
  //}    
}
