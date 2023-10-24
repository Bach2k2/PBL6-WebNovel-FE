import { useState, useEffect } from 'react';
import {getNovelList} from '../../../api/apiStory'
import Story from '../../../components/Story/StoryTest';
import Reading from '../../../components/Reading/Reading';
import Section, { SectionHeading, SectionBody } from '../../../components/Section/Section';
export function ListStoryTest() {
    // const [datas, setData] = useState(Array.from(Array(6).keys(), i => { return {} }));
    const [datas, setData] = useState(Array.from(Array(6).keys(), i => { return {} }));
    const [readings, setReadings] = useState(Array.from(Array(6).keys(), i => { return {} }))
    useEffect(() => {
        const getStory = async () => {//xử lý gọi hàm load truyện
            try{
                const res = await getNovelList();
                // console.log(res);
                setData(res);
                setReadings(readings);
                console.log(datas);
            }catch (error){
                console.error('Lỗi khi lấy dữ liệu:', error);
            }
            // const res = getNovelsList(await getNovelsList({ size: 6 }));
            
        }
        getStory();
    }, [])

    return (
        <div key={"ListStory"} className='row'>

            {datas.length > 0 ? (
                <div className='col-8 col-md-12 col-sm-12'>
                  {/* Sử dụng dữ liệu trong datas */}
                  <Section >
                    <SectionHeading>
                      <h4 className='section-title'>Weekly Book</h4>
            
                    </SectionHeading>
                    <SectionBody>
                      <div key={"section1"} className='list-story' style={{ marginTop: -24 }}>
                        {datas.map((data, index) => (
                          <Story key={index + 1} data={data} />
                        ))}
                      </div>
                    </SectionBody>
                  </Section>
                </div>
              ) : (
                // Trường hợp không có dữ liệu
                <div className='col-8 col-md-12 col-sm-12'>
                  <p>Không có dữ liệu.</p>
                </div>
              )}

            <div className='col-4 col-md-12 col-sm-12'>
                <Section key={"section2"}>
                    <SectionHeading>
                        <h4 className='section-title'>Reading</h4>
                        {/* <Link to="tat-ca">More</Link> */}
                    </SectionHeading>
                    <SectionBody>
                        <div className='list-reading'>
                            {readings.map((item, i) => <Reading key={12 + i} data={{
                                name: item.name,
                                title: item.title,
                                imageCover: 'https://static.8cache.com/cover/o/eJzLyTDW1y0qKncOMPYKcXQy0Q9zSktPjaxw987y1HeEguzQSP3kxDCDTLeywDJTC_1yI0NT3QxjIyMAV8wSdQ==/tu-than-chi-tien.jpg',
                                author: item.author,
                                year: item.year,
                                views: item.views,
                                rating: item.rating,
                                description: item.description,
                                status: item.status,
                                approvalStatus: item.approvalStatus
                            }} />)}
                        </div>
                    </SectionBody>
                </Section>

            </div>
        </div>


    )
}
export default ListStoryTest;