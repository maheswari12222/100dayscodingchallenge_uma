# Create a list of favorite movies
favorite_movies = ["salaar", "The Godfather", "fidaa"]

# Add a new movie to the list
favorite_movies.append("Anand")

# Create a tuple with the release years of the movies
release_years = (2023, 1972, 2017, 2004)

# Print the third movie in the list and its release year
print(f"The third movie in the list is {favorite_movies[2]} and it was released in {release_years[2]}.")

# Check if a specific movie is in the list
movie_to_check = "The Godfather"
if movie_to_check in favorite_movies:
    print(f"{movie_to_check} is in the list.")
else:
    print(f"{movie_to_check} is not in the list.")

# Concatenate the list of movies with a friend's list
friends_movies = ["sakhi", "Go Ahead", "Darling"]
combined_list = favorite_movies + friends_movies

# Print the combined list
print("The combined list of movies is:", combined_list)