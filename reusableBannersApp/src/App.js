import './App.css'

import BannerCardItem from './components/BannerCardItem/index'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <div>
    <li className={bannerCardsList[0].className}>
      <BannerCardItem
        bannerDetails={bannerCardsList[0]}
        key={bannerCardsList[0].id}
      />
    </li>
    <li className={bannerCardsList[1].className}>
      <BannerCardItem
        bannerDetails={bannerCardsList[1]}
        key={bannerCardsList[1].id}
      />
    </li>
    <li className={bannerCardsList[2].className}>
      <BannerCardItem
        bannerDetails={bannerCardsList[2]}
        key={bannerCardsList[2].id}
      />
    </li>
  </div>
)

export default App
