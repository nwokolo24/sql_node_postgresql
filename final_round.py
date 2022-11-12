def main():
    board = read_board(filename)
    play_game(board)
    write_board(board)


def read_board(filename):
    create_board(filename)
    return 'board created'


def create_board(filename):
    print(f'{filename} created')


def play_game(board):
    if board == '':
        print('no board')
    else:
        create_board(board)


def write_board(board):
    print(board)