# collections 모듈에서 OrderedDict와 defaultdict를 가져옵니다.
from collections import OrderedDict
from collections import defaultdict

# 분석할 텍스트를 정의합니다.
text = """In a quiet village, a young artisan crafted intricate jewelry, inspired by the lush landscapes surrounding her. 
Every piece echoed the whispers of the forest, resonating with the songs of distant birds and the murmur of the nearby stream. 
Each day, as she polished the delicate silver and gemstones, she dreamed of adventures beyond the rolling hills, 
yearning to explore the mysteries hidden beneath the ancient skies. Her creations, filled with enchantment and grace, 
were soon sought after by travelers from far and wide.""".lower().split()

# 단어의 빈도를 저장할 defaultdict를 생성합니다. 기본값은 0입니다.
word_count = defaultdict(lambda: 0)

# 텍스트의 각 단어에 대해 반복합니다.
for word in text:
    # 단어의 빈도를 1씩 증가시킵니다.
    word_count[word] += 1

# word_count 사전을 단어 빈도의 내림차순으로 정렬한 OrderedDict를 생성합니다.
sorted_word_count = OrderedDict(sorted(
    word_count.items(), key=lambda t: t[1], reverse=True))

# 정렬된 단어 빈도를 출력합니다.
for i, v in sorted_word_count.items():
    print(i, v)


# 결과
    
# the 10
# of 4
# and 4
# a 2
# by 2
# with 2
# she 2
# in 1
# quiet 1
# village, 1
# young 1
# artisan 1
# crafted 1
# intricate 1
# jewelry, 1
# inspired 1
# lush 1
# landscapes 1
# surrounding 1
# her. 1
# every 1
# piece 1
# echoed 1
# whispers 1
# forest, 1
# resonating 1
# songs 1
# distant 1
# birds 1
# murmur 1
# nearby 1
# stream. 1
# each 1
# day, 1
# as 1
# polished 1
# delicate 1
# silver 1
# gemstones, 1
# dreamed 1
# adventures 1
# beyond 1
# rolling 1
# hills, 1
# yearning 1
# to 1
# explore 1
# mysteries 1
# hidden 1
# beneath 1
# ancient 1
# skies. 1
# her 1
# creations, 1
# filled 1
# enchantment 1
# grace, 1
# were 1
# soon 1
# sought 1
# after 1
# travelers 1
# from 1
# far 1
# wide. 1
