<<-CHALLENGE01

Create a class called Superhero which takes in a name for constructing instances:

s = Superhero.new("Lady Fairplay")

Once created, we should be able to access their given name again:

s.name # ==> "Lady Fairplay"

CHALLENGE01

class Superhero
  attr_accessor :name
  def initialize(name)
    @name = name
  end
end
