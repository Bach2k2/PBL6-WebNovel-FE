import { useEffect, useState } from 'react'
import apiMain from '../../../api/apiMain';
import Reading from '../../../components/Reading/Reading';
import Section, { SectionHeading, SectionBody } from '../../../components/Section/Section';
import Story from '../../../components/Story/Story';
import getData from '../../../api/getData';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { loginSuccess } from '../../../redux/authSlice'
import './ListStory.scss'

function ListStory() {

  const [datas, setData] = useState(Array.from(Array(6).keys(), i => { return {} }));
  const [readings, setReadings] = useState(Array.from(Array(6).keys(), i => { return {} }))
  const user = useSelector(state => state.auth.login.user)
  const dispatch = useDispatch()

  useEffect(() => {

    const getReadings = async () => {//Xử lý gọi API thông tin đang đọc
      let readingsDefault = await apiMain.getReadingDefault({ page: 1, size: 8 });
      console.log(readingsDefault)
      if (user) {
        if (readingsDefault) {
          apiMain.getReadings(user, dispatch, loginSuccess)
            .then(res => {
              if (res.length < 10) {
                res = [...res, ...readingsDefault].slice(0, 8)
              }
              setReadings(res)
              localStorage.setItem("readings", JSON.stringify(res))
            })
            .catch(err => {
              console.log(err)
            })
        }
      }
      else {

        if (localStorage.getItem("readings")) {
          let readings = JSON.parse(localStorage.getItem("readings"))
          if (Array.isArray(readings)) {
            setReadings(readings)
          }
        }
        else {
          setReadings(readingsDefault)
          localStorage.setItem("readings", JSON.stringify(readingsDefault))
        }

      }
    }
    getReadings();//gọi hàm
  }, [user, dispatch])

  useEffect(() => {
    const getStory = async () => {//xử lý gọi hàm load truyện
      const res = getData(await apiMain.getStorys({ size: 6 }));
      // if (res != undefined) {
      //   res.data.forEach(item => {
      //     // Thêm thuộc tính 'imageCover' với giá trị mặc định cho mỗi phần tử
      //     item.imageCover = "https://book-pic.webnovel.com/bookcover/22600918205369205?imageMogr2/thumbnail/150&imageId=1684504174447";
      //   });

      // }
      setData(res);
    }
    getStory();
  }, [])
  return (
    <div key={"ListStory"} className='row'>
      <div className='col-8 col-md-12 col-sm-12'>
        <Section >
          <SectionHeading>
            <h4 className='section-title'>Weekly Book</h4>
            <Link to='tat-ca'>More</Link>
          </SectionHeading>
          <SectionBody>
            <div key={"section1"} className='list-story' style={{ marginTop: -24 }}>
              {datas.map((data, index) => <Story key={index + 1} data={data} />)}
            </div>
          </SectionBody>
        </Section>

      </div>

      <div className='col-4 col-md-12 col-sm-12'>
        <Section key={"section2"}>
          <SectionHeading>
            <h4 className='section-title'>Reading</h4>
            <Link to="tat-ca">More</Link>
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


const listReadingDefault = [
  {
    name: "Tử Thần Chi Tiễn",
    // url:"tu-than-chi-tien",
    imageCover: "https://static.8cache.com/cover/o/eJzLyTDW1y0qKncOMPYKcXQy0Q9zSktPjaxw987y1HeEguzQSP3kxDCDTLeywDJTC_1yI0NT3QxjIyMAV8wSdQ==/tu-than-chi-tien.jpg"

  }
]


export default ListStory