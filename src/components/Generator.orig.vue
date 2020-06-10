				<div v-show="!isLoading" :class="`animate__delay-${i}s`" class="card animate__animated animate__fadeInDown" v-for="(person, i) in names.results" :key="i" :title="i+1" >
					<div class="card-content"  @click.prevent="copyClipboard(`${i}-person-${person.name.first}`)">

						<div class="media">
							<div class="media-left">
								<figure class="image is-48x48">
									<img :src="person.picture.thumbnail" alt="Placeholder image">
								</figure>
							</div>
							<div class="media-content">
								<p class="subtitle is-5 person-name">{{ person.name.first }} {{ person.name.last }} 
									<span v-show="person.gender == 'male'" class="icon has-text-info">
										<i class="fas fa-mars"></i>
									</span>

									<span v-show="person.gender == 'female'" class="icon has-text-danger">
										<i class="fas fa-venus"></i>
									</span>
								</p>
								
								<p class="subtitle is-5 person-username">
									{{ person.location.street.name }} {{ person.location.street.number }} <br />
									{{ person.location.state }}, {{ person.location.city }} <br />
									{{ person.location.country }}
								</p>
								
								<p :id="`${i}-person-${person.name.first}`" class="subtitle is-5 person-email">{{ generateEmail(person.name.first+person.name.last) }}</p>
								
							</div>
						</div>

					</div>
					
				</div>