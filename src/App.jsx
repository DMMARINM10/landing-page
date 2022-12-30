import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import FirstSection from './sections/FirstSection';
import Header from './sections/Header';
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import HotelOutlinedIcon from '@mui/icons-material/HotelOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import Footer from './sections/Footer';
import Dropdown from './sections/Dropdown';

const App = () => {
	const sections = [
		{
			name: 'encabezado',
			height: 120
		},
		{
			name: 'inicio',
			height: 900
		},
		{
			name: 'funcionalidades',
			height: 1800
		},
		{
			name: 'equipo',
			height: 700 //TODO:
		},
		{
			name: 'testimonios',
			height: 700 //TODO:
		},
		{
			name: 'precios',
			height: 700 //TODO:
		},
		{
			name: 'footer',
			height: 180
		}
	]
	const [currentSection, setCurrentSection] = useState('inicio')
	window.addEventListener("scroll", (_) => {
		const scroll = window.scrollY;
		const firstSection = sections[1].height - 10
		const secondSection = firstSection + sections[2].height
		if (scroll < firstSection) {
			if (currentSection !== sections[1].name) setCurrentSection(sections[1].name)
		} else if (scroll >= firstSection && scroll < secondSection) {
			if (currentSection !== sections[2].name) setCurrentSection(sections[2].name)
		}
	})
	const props = {
		currentSection,
		sections
	}
	const heightFunc = sections[2].height
	return (
		<div>
			<Header {...props} />
			<FirstSection {...props} />
			<section id="funcionalidades" style={{
				height: heightFunc,
				color: 'gray'
			}}>
				<div style={{
					backgroundColor: '#F3F0F5',
					// backgroundColor: 'lightgray',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					height: heightFunc / 3,
					justifyContent: 'space-evenly'
					// paddingBottom: '50px',
					// backgroundColor: 'blue'
					// color: 'rgba(0, 0, 0, 0.6)'
				}}>
					<div style={{
						// backgroundColor: 'yellow',
						textAlign: 'center',
						margin: '0px 20px',
						// maxWidth: '700px',
						// padding: '20px 0px',
						height: '40%',
						display: 'flex',
						alignItems: 'center'
					}}>
						<h2 style={{
							// backgroundColor: 'yellow',
							// textAlign: 'center',
							// margin: '0px 20px',
							maxWidth: '700px',
							color: 'gray'
							// padding: '20px 0px',
							// height: '70%'
							// color: 'gray' //TODO:
							// color: 'rgba(0, 0, 0, 0.6)'
						}}>Nuestro sistema ofrece una serie de ventajas que le ayudarán a gestionar su hotel con mayor eficacia</h2>
					</div>
					<div style={{
						display: 'flex',
						justifyContent: 'space-evenly',
						alignItems: 'flex-start',
						height: '100%',
						width: '100%',
						padding: '0px 12%',
						// padding: '0px 0px', //1234
					}}>
						<div style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'space-evenly',
							width: '20%',
							padding: '20px',
							textAlign: 'center',
							height: '90%',
							borderRadius: '20px',
							backgroundColor: 'white'
							// boxShadow: '5px 5px 5px 0 rgba(0, 0, 0, 0.2)'
						}}>
							{/*970 <img height={200} src='assets/images/features/usage.png' alt='' /> */}
							<img height={200} src='assets/images/features/usage.png' alt='' />
							<div style={{height: '60%'}}>

							<h4>Interfaz fácil de usar</h4>
							<div style={{ height: '20px' }}></div>
								<p style={{
									fontSize: '14px'
								}}>Facilita la navegación y el uso del sistema, incluso para quienes no son expertos en tecnología.</p>
								</div>
						</div>
						<div style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'space-evenly',
							width: '20%',
							// minWidth: '180px',
							padding: '20px',
							textAlign: 'center',
							height: '90%',
							borderRadius: '20px',
							backgroundColor: 'white'
							// boxShadow: '5px 5px 5px 0 rgba(0, 0, 0, 0.2)'
						}}>
							<img height={200} src='assets/images/features/charts.png' alt='' />
							<div style={{ height: '60%'}}>
							<h4>Datos en tiempo real</h4>
							<div style={{ height: '20px' }}></div>
								<p style={{
									fontSize: '14px'
								}}>Permite tomar decisiones informadas sobre las operaciones de su hotel y mantenerse al día de lo que ocurre en su propiedad.</p>
						</div>
								</div>
						<div style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'space-evenly',
							width: '20%',
							// minWidth: '350px',
							padding: '20px',
							textAlign: 'center',
							height: '90%',
							borderRadius: '20px',
							backgroundColor: 'white'
							// boxShadow: '5px 5px 5px 0 rgba(0, 0, 0, 0.2)'
						}}>
							<img height={200} src='assets/images/features/custom.png' alt='' />
							<div style={{ height: '60%'}}>

							<h4>Funciones personalizables</h4>
							<div style={{ height: '20px' }}></div>
							<p style={{
								fontSize: '14px'
							}}>Se puede adaptar a necesidades y preferencias específicas.</p>
							</div>
							{/* <div>
							</div> */}
						</div>
						<div style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'space-evenly',
							width: '20%',
							// minWidth: '350px',
							padding: '20px',
							textAlign: 'center',
							height: '90%',
							borderRadius: '20px',
							backgroundColor: 'white'
							// boxShadow: '5px 5px 5px 0 rgba(0, 0, 0, 0.2)'
						}}>
							<img height={200} src='assets/images/features/sync.png' alt='' />
							<div style={{height: '60%'}}>

							<h4>Accesibilidad móvil</h4>
							<div style={{ height: '20px' }}></div>
							<p style={{
								fontSize: '14px'
							}}>Su hotel puede ser gestionado desde cualquier lugar y en cualquier momento.</p>
							</div>
						</div>
					</div>
				</div>
				<div style={{
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					height: (2 * heightFunc) / 3,
					justifyContent: 'space-between',
					// backgroundColor: 'yellow',
					overflow: 'hidden'
				}}>
					{/* <div style={{
						height: '10%',
						backgroundColor: pink,
						width: '100%'
					}}></div> */}
					<div style={{
						textAlign: 'center',
						// margin: '0px 20px',
						height: '10%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						width: '100%',
						// position: 'relative',
						// zIndex: 1
						// backgroundColor: pink
					}}>
						<h2 style={{
							maxWidth: '700px',
							// backgroundColor: 'yellow'
						}}>Nuestro sistema de gestión hotelera incluye una serie de potentes funciones que le ayudarán a agilizar y optimizar sus operaciones</h2>
					</div>
					{/* <div style={{
						width: '100%',
						backgroundColor: '#F3F0F5',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						// position: 'relative',
						// zIndex: 1
					}}>
						<hr />
					</div> */}
					<hr />
					{/* <div style={{
							width: '500px',
							backgroundColor: '#ff153c',
							height: '500px',
							borderRadius: '500px',
							marginBottom: '-500px',
							position: 'relative',
							right: '-40%',
							top: '-10%',
							zIndex: 0,
							opacity: 0.6
						}}></div> */}
					{/* <div style={{
						width: '100%',
						height: 500 * 0.35,
						backgroundColor: pink,
						marginBottom: -500 * 0.35
					}}></div> */}
					<div style={{
						display: 'flex',
						width: '100%',
						height: '40%',
						justifyContent: 'space-around',
						alignItems: 'center',
						overflow: 'hidden',
						paddingLeft: '2%'
					}}>
						{/* <div style={{
							display: 'flex',
							flexDirection: 'column',
							width: '25%',
							minWidth: '350px',
							height: '100%',
							justifyContent: 'space-evenly'
						}}>
							<div style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '30%',
								minWidth: '350px',
								height: '100px'
							}}>
								<img width={120} src='assets/images/features/booking.png' alt='' />
								<div style={{ width: '10%-*' }}></div>
								<div>
									<h4>Reservas</h4>
									<p style={{
										fontSize: '14px'
									}}>Gestione las reservas de habitaciones, los planes de tarifas y la disponibilidad en tiempo real.</p>
								</div>
							</div>
							<div style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '30%',
								minWidth: '350px',
								height: '100px',
								// marginLeft: '50%'
							}}>
								<img width={120} src='assets/images/features/maintenance.png' alt='' />
								<div style={{ width: '10%-*' }}></div>
								<div>
									<h4>Mantenimiento</h4>
									<p style={{
										fontSize: '14px'
									}}>Gestione las solicitudes de mantenimiento y programe las tareas.</p>
								</div>
							</div>
							<div style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '30%',
								minWidth: '350px',
								height: '100px'
							}}>
								<img width={120} src='assets/images/features/data-report.png' alt='' />
								<div style={{ width: '10%-*' }}></div>
								<div>
									<h4>Informes</h4>
									<p style={{
										fontSize: '14px'
									}}>Genere informes sobre indicadores clave de rendimiento, como índices de ocupación, ingresos y nivel satisfacción del cliente.</p>
								</div>
							</div>
						</div> */}
						<div style={{
							display: 'flex',
							flexDirection: 'column',
							width: '40%',
							// backgroundColor: 'yellow',
							minWidth: '350px',
							height: '100%',
							justifyContent: 'space-evenly',
							alignItems: 'center',
							padding: '0px 20px'
						}}>

							<div style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								// backgroundColor: 'yellow',
								width: '90%',
								maxWidth: '500px',
								height: 'fit-content'
								// marginLeft: '50%'
							}}>
								{/* <img width={180} src='assets/images/features/travel.png' alt='' /> */}
								{/* <div style={{ width: '10%' }}></div> */}
								<HotelOutlinedIcon sx={{ fontSize: '350%', color: 'rgb(220, 68, 97)' }} />
								<div style={{ width: '10%' }}></div>
								<div>
									<h2>Recepción</h2>
									<p style={{
										fontSize: '14px'
									}}>Agilice las entradas y salidas, gestione los perfiles y solicitudes de los huéspedes y la asignación de habitaciones.</p>
								</div>
							</div>
							{/* <div style={{
										height: '10%'
									}}></div> */}
							<div style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '90%',
								maxWidth: '500px',
								height: 'fit-content'
								// marginLeft: '50%',
							}}>
								{/* <img width={180} src='assets/images/features/cleaning.png' alt='' /> */}
								<CleanHandsOutlinedIcon sx={{ fontSize: 50, color: 'rgb(63, 141, 146)' }} />
								<div style={{ width: '10%' }}></div>
								<div>
									<h2>Limpieza</h2>
									<p style={{
										fontSize: '14px'
									}}>Controle el estado de las habitaciones y comuníquese con el personal de limpieza a través del sistema.</p>
								</div>
							</div>
							<div style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '90%',
								maxWidth: '500px',
								height: 'fit-content'
								// marginLeft: '50%',
							}}>
								{/* <img width={180} src='assets/images/features/cleaning.png' alt='' /> */}
								{/* <div style={{ width: '10%' }}></div> */}
								<HandymanOutlinedIcon sx={{ fontSize: 50, color: 'rgb(245, 192, 73)' }} />
								<div style={{ width: '10%' }}></div>
								<div>
									<h2>Mantenimiento</h2>
									<p style={{
										fontSize: '14px'
									}}>Gestione las solicitudes de mantenimiento y programe las tareas respectivas.</p>
								</div>
							</div>
						</div>
						<img style={{
							width: '60%',
							position: 'relative'
							// width: '40%', height: '100%' //1316
							// width: '30%', height: '100%' //1096
							// display: 'none' //976
						}} src='assets/images/sections/mockup-1.png' alt='' />
					</div>
					<div style={{
						display: 'flex',
						width: '100%',
						height: '40%',
						justifyContent: 'space-around',
						alignItems: 'center',
						overflow: 'hidden',
						paddingLeft: '2%',
						backgroundColor: '#F3F0F5'
					}}>
						{/* <div style={{
							display: 'flex',
							flexDirection: 'column',
							width: '25%',
							minWidth: '350px',
							height: '100%',
							justifyContent: 'space-evenly'
						}}>
							<div style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '30%',
								minWidth: '350px',
								height: '100px'
							}}>
								<img width={120} src='assets/images/features/booking.png' alt='' />
								<div style={{ width: '10%-*' }}></div>
								<div>
									<h4>Reservas</h4>
									<p style={{
										fontSize: '14px'
									}}>Gestione las reservas de habitaciones, los planes de tarifas y la disponibilidad en tiempo real.</p>
								</div>
							</div>
							<div style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '30%',
								minWidth: '350px',
								height: '100px',
								// marginLeft: '50%'
							}}>
								<img width={120} src='assets/images/features/maintenance.png' alt='' />
								<div style={{ width: '10%-*' }}></div>
								<div>
									<h4>Mantenimiento</h4>
									<p style={{
										fontSize: '14px'
									}}>Gestione las solicitudes de mantenimiento y programe las tareas.</p>
								</div>
							</div>
							<div style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '30%',
								minWidth: '350px',
								height: '100px'
							}}>
								<img width={120} src='assets/images/features/data-report.png' alt='' />
								<div style={{ width: '10%-*' }}></div>
								<div>
									<h4>Informes</h4>
									<p style={{
										fontSize: '14px'
									}}>Genere informes sobre indicadores clave de rendimiento, como índices de ocupación, ingresos y nivel satisfacción del cliente.</p>
								</div>
							</div>
						</div> */}
						<img style={{
							width: '50%',
							position: 'relative',
							// paddingBottom: '100px'
							// width: '40%', height: '100%' //1316
							// width: '30%', height: '100%' //1096
							// display: 'none' //976
						}} src='assets/images/sections/mockup3.png' alt='' />
						<div style={{
							display: 'flex',
							flexDirection: 'column',
							width: '40%',
							// backgroundColor: 'yellow',
							minWidth: '350px',
							height: '100%',
							justifyContent: 'space-evenly',
							alignItems: 'center'
						}}>

							<div style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								// backgroundColor: 'yellow',
								width: '90%',
								maxWidth: '500px',
								height: 'fit-content',
								// marginLeft: '50%'
							}}>
								{/* <img width={180} src='assets/images/features/travel.png' alt='' /> */}
								{/* <div style={{ width: '10%' }}></div> */}
								<CurrencyExchangeOutlinedIcon sx={{ fontSize: 50, color: 'rgb(185, 41, 222)' }} />
								<div style={{ width: '10%' }}></div>
								<div>
									<h2>Reservas</h2>
									<p style={{
										fontSize: '14px'
									}}>Gestione las reservas de habitaciones, los planes de tarifas y la disponibilidad en tiempo real.</p>
								</div>
							</div>
							{/* <div style={{
										height: '10%'
									}}></div> */}
							<div style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								width: '90%',
								maxWidth: '500px',
								height: 'fit-content'
								// marginLeft: '50%',
							}}>
								{/* <img width={180} src='assets/images/features/cleaning.png' alt='' /> */}
								<InsertChartOutlinedSharpIcon sx={{ fontSize: 50, color: 'rgb(39, 93, 172)' }} />
								<div style={{ width: '10%' }}></div>
								<div>
									<h2>Informes</h2>
									<p style={{
										fontSize: '14px'
									}}>Genere informes sobre indicadores clave de rendimiento, como índices de ocupación, ingresos y nivel satisfacción del cliente.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className='secondSection_shape' style={{
					// height: shapeHeight
				}}>
					<div className='firstSection_inside-shape'>
						<div className='firstSection_text-container'>
							<h1>El nuevo software para gestionar tus hoteles, <span className='firstSection_name-style'>DAHU Hotels</span></h1>
							<p>Es una aplicación de administración y gestión hotelera que realiza un seguimiento de los estados de ocupación de las habitaciones, los huéspedes, los servicios y genera información y alertas relacionadas con las necesidades y requerimientos del negocio.</p>
							<button>Regístrate ahora</button>
						</div>
						<img className='firstSection_img' src='assets/images/sections/image.png' alt='Inicio' />
					</div>
				</div>
				<div className='firstSection_companies'>
					<img className='_logo-height' src='assets/images/companies/aws.png' alt='AWS' />
					<img className='_logo-height' src='assets/images/companies/dahu-labs.png' alt='Dahu Labs' />
					<img className='_logo-height' src='assets/images/companies/Mar-Inn.png' alt='Mar Inn Hotel' />
				</div> */}
			</section >
			<Footer {...props} />
			{/* <!-- ========================= hero-section end ========================= --> */}
			{/* <!-- ========================= brands-section end ========================= --> */}

			{/* <!-- ========================= feature-section start ========================= --> */}

			{/* <!-- ========================= feature-section-2 end ========================= --> */}

			{/* <!-- ========================= footer start ========================= --> */}
			{/* <footer className="footer">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-xl-6 col-lg-7">
							<div className="section-title">
								<h2>Subscribe Newsletter</h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis nulla placerat amet amet congue.</p>
							</div>
							<div className="newsletter-form-wrapper">
								<form action="#">
									<input type="email" placeholder="Email Address" />
									<button className="main-btn btn-hover">Subscribe Now</button>
								</form>
							</div>
						</div>
					</div>
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-8">
							<div className="footer-menu">
								<ul>
									<li><a href="#0">Home</a></li>
									<li><a href="#0">About</a></li>
									<li><a href="#0">Service</a></li>
									<li><a href="#0">Testimonial</a></li>
									<li><a href="#0">Contact</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6 col-md-4">
							<div className="footer-social">
								<ul>
									<li><a href="#0"><i className="lni lni-facebook"></i></a></li>
									<li><a href="#0"><i className="lni lni-linkedin"></i></a></li>
									<li><a href="#0"><i className="lni lni-instagram"></i></a></li>
									<li><a href="#0"><i className="lni lni-twitter"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</footer> */}
			{/* <!-- ========================= footer end ========================= --> */}


			{/* <!-- ========================= scroll-top ========================= --> */}
			{/* <a href="#" className="scroll-top btn-hover">
				<i className="lni lni-chevron-up"></i>
			</a> */}
		</div >
	)
}

export default App
