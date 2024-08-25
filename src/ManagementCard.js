import { useState } from 'react'
import { Collapse, Tab, Tabs } from 'react-bootstrap'

import { cardJson } from './ManagementTranslate/qpCardJson'

import instagramIcon from './img/instagram-1-svgrepo-com.svg'
import img from './img/photo_2024-08-25_12-46-32.jpg'
import telegramIcon from './img/telegram-svgrepo-com.svg'

function ManagementCard() {
	const [activeTab, setActiveTab] = useState('tab1')

	const handleSelect = key => {
		setActiveTab(key)
	}

	return (
		<>
			{cardJson.map((dataJson, index) => (
				<div className='card-box'>
					<div className='card-tabs'>
						<Tabs
							activeKey={activeTab}
							onSelect={handleSelect}
							className='custom-tabs mb-3'
						>
							<Tab eventKey='tab1' title={dataJson.tabsOne}></Tab>
							<Tab eventKey='tab2' title={dataJson.tabsTwo}></Tab>
						</Tabs>
					</div>
					<Collapse in={activeTab === 'tab1'} className='custom-collapse'>
						<div className='row'>
							<div className='col-3'>
								<img
									src={img}
									alt='Profile'
									className='img-fluid rounded'
									style={{ width: '185px', height: '185px' }}
								/>
							</div>
							<div className='col-9 text-center'>
								<p>
									<strong>
										<h5>
											<b>{dataJson.title}</b>
										</h5>
										<h4>
											<b>{dataJson.name}</b>
										</h4>
									</strong>
								</p>
								<div className='text-start'>
									<p>
										<strong>{dataJson.emailName}</strong>
										<a href='#'>{dataJson.email}</a>
									</p>
									<p>
										<strong>{dataJson.phoneName}</strong>
										{dataJson.phone}
									</p>
									<p>
										<strong>{dataJson.daysName}</strong>
										{dataJson.days}
									</p>
									<div className='mt-4 '>
										<p>
											<span>
												<img
													src={telegramIcon}
													alt='Telegram'
													className='iconsGram'
												/>
												<a href='#'>{dataJson.telegram}</a>
											</span>
										</p>
										<p>
											<img
												src={instagramIcon}
												alt='Instagram'
												className='iconsGram'
											/>
											<a href='#'>{dataJson.instagram}</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</Collapse>

					<Collapse in={activeTab === 'tab2'} className='custom-collapse'>
						<div>
							<p>
								<strong>{dataJson.text1}</strong>
							</p>
							<p>{dataJson.text2}</p>
							<p>{dataJson.text3}</p>
							<p>{dataJson.text4}</p>
							<p>{dataJson.text5}</p>
							<p>{dataJson.text6}</p>
							<p>{dataJson.text7}</p>
						</div>
					</Collapse>
				</div>
			))}
		</>
	)
}

export default ManagementCard
