# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def addTwoNumbers(self, l1, l2):
        l1.reverse()
        l2.reverse()
        listaNumL1 = ""
        listaNumL2 = ""
        for i in l1:
            listaNumL1 += str(i)

        for i in l2:
            listaNumL2 += str(i)

        res = int(listaNumL1) + int(listaNumL2)
        res = [int(i) for i in str(res)]
        res.reverse()

        return res



if __name__ == '__main__':
    num = Solution()
    print(num.addTwoNumbers([2,4,3],[5,6,4]))
    print(num.addTwoNumbers([0],[0]))
    print(num.addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))

    