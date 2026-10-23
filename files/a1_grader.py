#####################################
# DSCI-D 590              Gabe Mack #
# Grading utility for Assignment 01 #
#                                   #
# test_func(func_name)              #
#   func_name: function to test     #
#                                   #
# Test a function with the examples #
# given in the examples dictionary. #
#####################################
def capture_print():
    import sys
    from io import StringIO
    original_stdout = sys.stdout
    tester_stdout = StringIO()
    sys.stdout = tester_stdout
    return original_stdout, tester_stdout

def restore_print(original_stdout):
    import sys 
    sys.stdout = original_stdout
    
def test_func(print_triangle):
    examples = {
        5: [
            "    5",
            "   5 5",
            "  5 5 5",
            " 5 5 5 5",
            "5 5 5 5 5"
            ],
        3: [
            "  3",
            " 3 3",
            "3 3 3"
            ],
        2: [
            " 2",
            "2 2"
            ],
        1: [
            "1"
            ],
        }
    original_stdout, tester_stdout = capture_print()
    output = ''
    try:
        for example in examples:
            original_stdout.write('Testing ' + str(example) + '\n')
            print_triangle(str(example)) # type conversion per assignment instructions
            output = tester_stdout.getvalue()
            # clear buffer
            tester_stdout.truncate(0)
            tester_stdout.seek(0)
            for i in range(len(examples[example])):
                assert output.split('\n')[i].startswith(examples[example][i])
            original_stdout.write('Test passed for ' + str(example) + '\n')
    finally:
        restore_print(original_stdout)