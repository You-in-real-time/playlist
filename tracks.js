/* ▼ 여기만 수정하면 됩니다. file은 songs 폴더 안 mp3 파일명 ▼ */
var TRACKS = [
  { file:"songs/01.mp3", cover:"covers/01.jpg", title:"twin", artist:"JENNIE", work:"분노하는 얼굴들",
    text:"한순간, 사랑에 빠지는 일은\n결국 넘어지는 것일까.\n내가 그에게로 지탱할 틈도 없이\n일순간 넘어지고 마는 일" },
  { file:"songs/02.mp3", cover:"covers/02.jpg", title:"공놀이", artist:"참깨와 솜사탕", work:"실시간의 당신", text:" 어쩌면 우리가 서로를 앓아줄 수 있는 유일한 사람일지도 모르지 않냐고.\n그러니까 나는 당신에게 그 음악을 들려주고 싶지 않았다고." },
  { file:"songs/03.mp3", cover:"covers/03.jpg", title:"저기요", artist:"산보", work:"마지막에 마지막", text:"시류는, 시대는 누군가를 향해 문을 열어주는 것이 아니었다. 흐르면 흐를수록 틈을 좁히는 닫히는 문이었다. 붙잡을 문고리조차 없이." },
  { file:"songs/04.mp3", cover:"covers/04.jpg", title:"죽지 않은 연인에게", artist:"데이먼스 이어", work:"단칸방", text:"가질 수 있는 것보다 가질 것이 많았다\n그 중에 너는 가지고 싶었던 것\n그런데도 그 중 가장 부피가 크다" },
{ file:"songs/05.mp3", cover:"covers/05.jpeg", title:"Evergreen", artist:"Yutaka Hirasaka", work:"한 시의 연인", text:"조금 더 많은 그를 알았을까\n\n가끔은 억세지고\n가끔은 미워지고\n가끔은 얄궂어지는\n\n아끼는 것을 바라보는 그의 표정을 알았을까" },
{ file:"songs/06.mp3", cover:"covers/06.jpg", title:"マヨイガ", artist:"羊文学", work:"다음 정류장", text:"내 수많은 다음 정류장들이 고백이었다는 걸\n너는 모르지\n전화를 거는데 받지를 않는다\n너는 버스 뒤를 바삐 달리고 있을 것이다" },
{ file:"songs/07.mp3", cover:"covers/07.jpeg", title:"바람", artist:"유다빈밴드", work:"어제 레몬이 죽었다", text:"레몬이 이길 수 있는 세상을 만들 거다\n그런 생각을 하다 보면\n나는 이미 졌다는 것을 체감한다" },
{ file:"songs/08.mp3", cover:"covers/08.jpeg", title:"언제나 여름", artist:"라쿠나", work:"빨래", text:"언젠가 우리는\n같은 물기에 젖어 같은 시간에 마른 적이\n있었을 텐데" },
{ file:"songs/09.mp3", cover:"covers/09.jpg", title:"뭍으로", artist:"잔물결", work:"소금빵에 꿀을 올려먹기", text:"애인은 기대하는 일을 했다\n제 손을 부여잡는 타인의 손에\n자신의 이름에 ㅇ을 하나 더 붙여 부르는\n살가운 목소리에\n.으로 끝낼 문장에 ..!로 끝을 내는 문자들에" },
{ file:"songs/10.mp3", cover:"covers/10.jpeg", title:"Enter Sandman", artist:"에로틱웜즈익스히비션", work:"구석을 살피는 일", text:"부양은 구석을 살피는 일\n두 눈, 두 다리, 두 팔에 숨어버린\n구석을 들춥니다\n거기 작년 여름의 이야기가 있습니다" },
{ file:"songs/11.mp3", cover:"covers/11.jpg", title:"even if fall into a fail", artist:"팔칠댄스", work:"영화", text:"겹치는 숨 한 번이 소란이 되는 영화관에서\n우리는 나란히 앉아" },
{ file:"songs/12.mp3", cover:"covers/12.jpg", title:"사라지는 꿈", artist:"술탄 오브 더 디스코", work:"종말의 QnA", text:"그럼 우리는 언제 그 나무를 심어야 했을까요\n내일 종말이 온다는 걸 알기 아주 전부터\n우리는 그때 언제 사과나무를 심어야 했을까요" },
{ file:"songs/13.mp3", cover:"covers/13.jpg", title:"Crystal Clear (2022 Remastered)", artist:"After Thoughts", work:"►►", text:"방문을 두드리는 음악을 찾고 있어\n\n두 귀를 완전히 가둔 먹먹함에서\n오랜 기억에게 짧은 답장을 남겼다" },
{ file:"songs/14.mp3", cover:"covers/14.jpg", title:"graf", artist:"haruka nakamura", work:"떠나온 사람들", text:"나도 떠나온 사람이었다면\n손을 흔들 수 있었을까 \n한다고 말할 수 있었을까" },
{ file:"songs/15.mp3", cover:"covers/15.jpg", title:"파도", artist:"하현상", work:"어떤 여행은 영영 돌아올 수 없어서 집이 되기도 했다", text:"왜 모두가 돌아온다는 걸 믿어 의심치 않을까.\n모두가 약속하지 않은 약속을 수두룩하게 쌓아두고 쓰다듬지 않는다." },
{ file:"songs/16.mp3", cover:"covers/16.jpg", title:"Tommy's Party", artist:"Peach Pit", work:"2022년.", text:"나는 정말 \n우리가 영영 그 골목을 나올 수 없을 줄 알았다\n그 골목이 영영 어둠으로 들어차 있을 줄 알았다" },
{ file:"songs/17.mp3", cover:"covers/17.jpg", title:"The Town", artist:"박준하", work:"난이에게", text:"나는 선배의 우리가 되고 싶었어. \n그 안에 들어가기엔 \n나는 너무 약하고 겁이 많은 사람이라서. \n기어코 그 밖으로 나오게 됐지만." },




];
var PREVIEW_SECONDS = 12;   /* mp3가 없을 때(미리보기) 곡당 표시 시간 */
var IDLE_SECONDS = 45;      /* 목록을 연 채 방치하면 자동으로 닫힘 */
/* ▲ 수정 끝 ▲ */