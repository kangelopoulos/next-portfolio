
export default function Card() {
  return (
    <div className="card">
      <h2>Title</h2>
      <img alt="fake"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat risus nisi. Mauris eleifend elementum enim, eget aliquet neque accumsan posuere. </p>
      <div class="tech-badges">
        {/* put tech badges here for each tech */}
      </div>
      <a>Github</a>
      <a href="">Site</a>
    </div>
  )
}