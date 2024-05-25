//"https://source.unsplash.com/random"

export default function ImageCard({ image }) {

  const tags = image.tags.split(",")

  return (
    <div className='shadow-lg overflow-hidden rounded max-w-sm dark:shadow-white dark:shadow-md'>
      <img src={image.webformatURL}className='w-full' />
      <div className="px-4 py-6">
        <div className='text-3xl text-purple-500 font-bold  mb-4'>
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className='px-4 py-6'>
        {tags.map((tag, i) => <span key={i} className='inline-block text-gray-500 bg-gray-100 text-sm font-semibold rounded-full px-3 py-1'>
          #{tag}
        </span>)}
      </div>
   </div>
  )
}