<BannerCardItem
        bannerDetails={bannerCardsList[0]}
        key={bannerCardsList[0].id}
      />
      <BannerCardItem
        bannerDetails={bannerCardsList[1]}
        key={bannerCardsList[1].id}
      />
      <BannerCardItem
        bannerDetails={bannerCardsList[2]}
        key={bannerCardsList[2].id}
      /> 


<ul className="cards-container">
      {bannerCardsList.map(each => (
        <BannerCardItem bannerDetails={each} key={each.id} />
      ))}
    </ul>