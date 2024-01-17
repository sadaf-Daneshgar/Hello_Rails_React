greetings = [
    "Hello, World!",
    "This is Sadaf Daneshgar",
    "Welcome to my website",
    "I am a software engineer",
    "I am a full-stack developer",
    "I am a web developer",
]

greetings.each do |greeting|
    Message.create(content: greeting)
end
