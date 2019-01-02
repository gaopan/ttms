let zh_hk = {
	'2017': [{
		grade:'A*A*A',
		college:'牛津大學',
		course:'醫學'
	},{
		grade:'A*A*A*AA',
		college:'伯明罕大學古典',
		course:'文學'
	},{
		grade:'A*A*A',
		college:'倫敦大學學院',
		course:'生物化學'
	},{
		grade:'A*AA',
		college:'謝菲爾德大學',
		course:'生物化學'
	},{
		grade:'A*AA',
		college:'倫敦大學學院',
		course:'醫學'
	},{
		grade:'A*AA',
		college:'格拉斯哥大學',
		course:'醫學'
	},{
		grade:'A*AA',
		college:'倫敦大學學院',
		course:'工程學'
	},{
		grade:'A*AA',
		college:'華威大學',
		course:'數學'
	},{
		grade:'A*AB',
		college:'布裏斯托大學',
		course:'電腦科學'
	},{
		grade:'AAB',
		college:'愛丁堡大學',
		course:'建築學'
	},{
		grade:'A*A*A',
		college:'華威大學',
		course:'法學'
	},{
		grade:'A*A*A',
		college:'倫敦大學學院',
		course:'管理數學'
	},{
		grade:'A*A*A*A*A',
		college:'倫敦大學學院',
		course:'生物醫學'
	},{
		grade:'A*A*A',
		college:'紐卡斯爾大學',
		course:'醫學'
	},{
		grade:'A*AAA',
		college:'倫敦大學學院',
		course:'生物醫學'
	},{
		grade:'A*AA',
		college:'倫敦大學學院',
		course:'經濟學'
	},{
		grade:'A*AA',
		college:'倫敦大學學院',
		course:'電腦科學'
	},{
		grade:'AAA',
		college:'薩裏大學',
		course:'獸醫'
	}],
	'2018': [{college:'牛津大學',course:'醫學'},
		{college:'劍橋大學',course:'醫學，土木工程學，經濟學'},
		{college:'伯明罕大學',course:'醫學，物理學'},
		{college:'倫敦大學學院',course:'醫學，土木工程學，經濟學'},
		{college:'謝菲爾德大學',course:'生物醫學，物理學'},
		{college:'帝國理工學院',course:'醫學，土木工程學'},
		{college:'格拉斯哥大學',course:'牙科，社會學'},
		{college:'倫敦國王學院',course:'醫學，藥劑學'},
		{college:'華威大學',course:'生物醫學科學'},
		{college:'布裏斯托大學',course:'電氣工程'},
		{college:'愛丁堡大學',course:'電氣工程'},
		{college:'愛爾蘭皇家外科醫學院',course:'醫學'},
		{college:'赫瑞瓦特大學',course:'精算學'},
		{college:'中央蘭開夏大學',course:'醫學及手術'},
		{college:'紐卡斯爾大學',course:'醫學，牙科，社會學'},
		{college:'埃塞克斯大學',course:'管理與市場學'},
		{college:'香港大學',course:'國際商務與全球管理'},
		{college:'曼徹斯特大學',course:'精算學及數學'},
		{college:'薩裏大學',course:'商業管理'}]
}
let en = [{
	year:'2017',
	data:`<table>
		<tr><th>Grade</th><th>University</th><th>Degree Course</th></tr>
		<tr><td>A*A*A</td><td>University of Oxford</td><td>Medicine</td></tr>
		<tr><td>A*A*A*AA</td><td>University of Birmingham</td><td>Classics</td></tr>
		<tr><td>A*A*A</td><td>University College London (UCL)</td><td>Biochemistry</td></tr>
		<tr><td>A*AA</td><td>University of Sheffield</td><td>Biochemistry</td></tr>
		<tr><td>A*AA</td><td>University College London (UCL)</td><td>Medicine</td></tr>
		<tr><td>A*AA</td><td>University of Glasgow</td><td>Medicine</td></tr>
		<tr><td>A*AA</td><td>University College London (UCL)</td><td>Engineering</td></tr>
		<tr><td>A*AA</td><td>University of Warwick</td><td>Mathematics</td></tr>
		<tr><td>A*AB</td><td>University of Bristol</td><td>Computer Science</td></tr>
		<tr><td>AAB</td><td>University of Edinburgh</td><td>Architecture</td></tr>
		<tr><td>A*A*A</td><td>University of Warwick</td><td>Law</td></tr>
		<tr><td>A*A*A</td><td>University College London (UCL)</td><td>Mathematics with Management Studies</td></tr>
		<tr><td>A*A*A*A*A</td><td>University College London (UCL)</td><td>Biomedical Science</td></tr>
		<tr><td>A*A*A</td><td>University of Newcastle</td><td>Medicine</td></tr>
		<tr><td>A*AAA</td><td>University College London (UCL)</td><td>Biomedical Science</td></tr>
		<tr><td>A*AA</td><td>University College London (UCL)</td><td>Economics</td></tr>
		<tr><td>A*AA</td><td>University College London (UCL)</td><td>Computer Science</td></tr>
		<tr><td>AAA</td><td>University of Surrey</td><td>Veterinary Medicine and Science</td></tr>
	</table>`
},{
	year:'2018',
	data:`<table>
		<tr><th>University</th><th>Degree Course</th></tr>
		<tr><td>University of Oxford</td><td>Medicine</td></tr>
		<tr><td>University of Cambridge</td><td>Medicine,Civil Engineering,Economics</td></tr>
		<tr><td>University of Birmingham</td><td>Medicine,Physics</td></tr>
		<tr><td>University College London (UCL)</td><td>Medicine,Civil Engineering,Economics</td></tr>
		<tr><td>University of Sheffield</td><td>Biomedical Sciences,Physics</td></tr>
		<tr><td>Imperial College London</td><td>Medicine,Civil Engineering</td></tr>
		<tr><td>University of Glasgow</td><td>Dentistry,Sociology</td></tr>
		<tr><td>Kings College London</td><td>Medicine,Pharmacy</td></tr>
		<tr><td>University of Warwick</td><td>Biomedical Sciences</td></tr>
		<tr><td>University of Bristol</td><td>Electrical Engineering</td></tr>
		<tr><td>University of Edinburgh</td><td>Electrical Engineering</td></tr>
		<tr><td>Royal College of Surgeons,Ireland</td><td>Medicine</td></tr>
		<tr><td>Heriot-Watt University</td><td>Actuarial Science</td></tr>
		<tr><td>University of Central Lancashire</td><td>Medicine and Surgery</td></tr>
		<tr><td>University of Newcastle</td><td>Medicine,Dentistry,Sociology</td></tr>
		<tr><td>University of Essex</td><td>Management and Marketing</td></tr>
		<tr><td>University of Hong Kong (HKU)</td><td>International Business and Global Management</td></tr>
		<tr><td>University of Manchester</td><td>Actuarial Science and Mathematics</td></tr>
		<tr><td>University of Surrey</td><td>Business Management</td></tr>
	</table>`
}]
export default {zh_hk, en}