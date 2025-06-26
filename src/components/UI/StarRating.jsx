function StarRating({ rating, size = "text-sm" }) {
  const stars = []
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 !== 0

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className={`fas fa-star star-rating ${size}`}></i>)
  }

  if (hasHalfStar) {
    stars.push(<i key="half" className={`fas fa-star-half-alt star-rating ${size}`}></i>)
  }

  const emptyStars = 5 - Math.ceil(rating)
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={`empty-${i}`} className={`far fa-star text-gray-500 ${size}`}></i>)
  }

  return <div className="flex items-center gap-1">{stars}</div>
}

export default StarRating
