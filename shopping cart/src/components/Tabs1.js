import React from 'react'
import "antd/dist/antd.css";
import { Carousel } from 'antd';

export default function Tabs1() {

	return (
		<div style={{
			display: 'block',
		}}>
			<>
				<Carousel autoplay>
					<div>
						<h3 style={{
							backgroundImage: "url(" + "https://img.freepik.com/vektoren-kostenlos/online-shopping-illustration_1085-848.jpg?size=338&ext=jpg" + ")",
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							height: '100%'
						}}></h3>
					</div>
					<div>
						<h3 style={{
							backgroundImage: "url(" + "https://img.freepik.com/vektoren-kostenlos/abstraktes-konzept-der-konsumgesellschaft_335657-3111.jpg?size=338&ext=jpg" + ")",
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							height: '100%'
						}}></h3>
					</div>
					<div>
						<h3 style={{
							backgroundImage: "url(" + "https://img.freepik.com/vektoren-kostenlos/vektorillustration-des-abstrakten-konzepts-der-verbraucherinformation-verbraucherrecht-datenschutzrichtlinien-finanzinformationen-marketingdienst-kaeuferschutz-abstrakte-metapher-fuer-online-einkaeufe_335657-2882.jpg?size=338&ext=jpg" + ")",
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							height: '100%'
						}}></h3>
					</div>
				</Carousel>
			</>
		</div>
	);
}
