class Game
  attr_accessor 
  def initialize()
    @player1 = 3
    @player2 = 3
  end

  def start()
    while @player1 > 0 && @player2 > 0 do
      num1 = rand(1..10)
      num2 = rand(1..10)
      puts "Player 1: What does #{num1} plus #{num2} equal?"
      a1 = gets 
      a = num1 + num2
      if a1.to_i ==  a
        puts "Player 1: YES! You are correct."
      else 
        @player1 -= 1
        puts "Seriously? No!" 
      end

      num1 = rand(1..10)
      num2 = rand(1..10)
      puts "Player 2: What does #{num1} plus #{num2} equal?"
      a2 = gets 
      if a2.to_i == (num1 + num2)
        puts "Player 2: YES! You are correct."
      else 
        @player2 -= 1
        puts "Seriously? No!" 
      end

      puts "P1: #{@player1}/3 vs P2: #{@player2}/3"
    end

    if @player1 > 0
      puts "Player 1 wins with a score of #{@player1}/3"
    else
      puts "Player 2 wins with a score of #{@player2}/3"
    end
    puts "-----GAME OVER -----"
    puts "Good bye!"
  end
end

g = Game. new
g.start
