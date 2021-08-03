# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#Create a Method called wordFinder
#   parameters - an array and a letter
#   UPDATE: create an empty array to store the values if it finds a match
#   Iterate through the array 
#       check the word at the index to see if it contains the letter
#       if it does then return the word
#   return the new array
# End

def wordFinder(array, letter)
    newArray = []
    array.map do |value|
       if value.include? letter 
        newArray << value
       end
    end
    newArray
end

p wordFinder(beverages_array, letter_o)
p wordFinder(beverages_array, letter_t)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#Create a method called removeVowels
#   parameters string
#   iterate through the string
#       if it finds a vowel then remove it
#    return the string without vowels
#END

#UPDATE I didnt need to iterate through them using the delete method

def removeVowels(string)
    string.delete('aeiou')
end

p removeVowels(album1)
p removeVowels(album2)
p removeVowels(album3)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

#Create a class called bike
#   initalize the values model, wheels, and speed
#   Create a get_info to return a sting with the values
#END

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

#Inside the Bike class
#   Create a method to increase the speed
#   Create a method to decrease the speed
#END

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

class Bike
    attr_accessor :model, :wheels, :current_speed

    def initialize(model)
        @model = model
        @current_speed = 0
        @wheels = 2
    end
    def get_info
        "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph."
    end
    def pedal_faster speed
        @current_speed += speed
    end
    def brake  speed
        if @current_speed - speed <= 0
            @current_speed = 0
        else
            @current_speed -= speed
        end
    end

end

bike1 = Bike.new('speed')

p bike1.get_info
p bike1.pedal_faster 125
p bike1.brake 15
p bike1.brake 1000

#Testing instance variable
p @current_speed = 300
p current_speed = 200
p @current_speed 
p current_speed